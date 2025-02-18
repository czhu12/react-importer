import { useEffect, useRef, useState } from 'preact/hooks';
import {
  ImporterOutputFieldType,
  SheetColumnDefinition,
  SheetState,
} from '../../types';
import { Select } from '../../components';
import { extractReferenceColumnPossibleValues } from '../utils';
import { useTranslations } from '../../i18';

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
  const { t } = useTranslations();

  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode) {
      clearRowsSelection();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [editMode]);

  const valueEmpty = value == null || value.trim() === '';
  // Use non-breaking space to keep the cell height
  const nonEmptyValue = valueEmpty ? '\u00A0' : value;
  const readOnly = columnDefinition.isReadOnly;

  if (!editMode) {
    return (
      <div
        onClick={(e) => !readOnly && e.detail > 1 && setEditMode(true)}
        title={readOnly ? t('sheet.readOnly') : t('sheet.editTooltip')}
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
    const referenceData = extractReferenceColumnPossibleValues(
      columnDefinition,
      allData
    );

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
      className="focus:outline-primary block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
      onBlur={(e) => updateValue((e.target as HTMLInputElement)?.value ?? '')}
    />
  );
}
