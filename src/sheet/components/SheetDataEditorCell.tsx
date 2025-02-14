import { useEffect, useRef, useState } from 'preact/hooks';
import {
  ImporterOutputFieldType,
  SheetColumnDefinition,
  SheetState,
} from '../../types';
import { Select } from '../../components';
import { isEmptyCell } from '../../utils';

interface Props {
  columnDefinition: SheetColumnDefinition;
  value: ImporterOutputFieldType;
  onUpdated: (value: ImporterOutputFieldType) => void;
  allData: SheetState[];
  clearRowsSelection: () => void;
}

export default function SheetDataEditorCell({
  columnDefinition,
  value,
  onUpdated,
  allData,
  clearRowsSelection,
}: Props) {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode) {
      clearRowsSelection();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [editMode, clearRowsSelection]);

  const valueEmpty = value == null || value.trim() === '';
  // Use non-breaking space to keep the cell height
  const nonEmptyValue = valueEmpty ? '\u00A0' : value;
  const readOnly = columnDefinition.isReadOnly;

  if (!editMode) {
    return (
      <div
        onClick={(e) => !readOnly && e.detail > 1 && setEditMode(true)}
        title={readOnly ? 'Read only' : 'Double click to edit'}
        className="h-full w-full"
      >
        {nonEmptyValue}
      </div>
    );
  }

  function updateValue(value: string) {
    setEditMode(false);
    onUpdated(value ?? '');
  }

  if (columnDefinition.type === 'reference') {
    const referenceArguments = columnDefinition.typeArguments;
    const referenceSheetData = allData.find(
      (data) => data.sheetId === referenceArguments.sheetId
    );

    const referenceData =
      referenceSheetData?.rows
        ?.map((row) => row[referenceArguments.sheetColumnId])
        ?.filter((c) => !isEmptyCell(c))
        ?.filter((c, index, allData) => allData.indexOf(c) === index) ?? []; // Remove duplicates

    const selectOptions = referenceData.map((value) => ({
      label: value,
      value,
    }));

    return (
      <Select
        options={selectOptions}
        value={value}
        onChange={(value) =>
          updateValue((value as ImporterOutputFieldType) ?? '')
        }
      />
    );
  }

  if (columnDefinition.type === 'enum') {
    const enumArguments = columnDefinition.typeArguments;
    const selectOptions = enumArguments.values;

    return (
      <Select
        options={selectOptions}
        value={value}
        onChange={(value) =>
          updateValue((value as ImporterOutputFieldType) ?? '')
        }
      />
    );
  }

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      onBlur={(e) => updateValue((e.target as HTMLInputElement)?.value ?? '')}
    />
  );
}
