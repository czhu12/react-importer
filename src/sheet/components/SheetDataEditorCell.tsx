import { useEffect, useRef, useState } from 'preact/hooks';
import {
  ImporterOutputFieldType,
  SheetColumnDefinition,
  SheetState,
} from '../../types';
import { Input, Select, Tooltip } from '../../components';
import { extractReferenceColumnPossibleValues } from '../utils';
import { useTranslations } from '../../i18';

interface Props {
  columnDefinition: SheetColumnDefinition;
  value: ImporterOutputFieldType;
  onUpdated: (value: ImporterOutputFieldType) => void;
  allData: SheetState[];
  clearRowsSelection: () => void;
  errorsText: string;
}

export default function SheetDataEditorCell({
  columnDefinition,
  value,
  onUpdated,
  allData,
  clearRowsSelection,
  errorsText,
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

  const cellBackgroundColor = errorsText
    ? 'bg-danger-extra-light'
    : readOnly
      ? 'bg-gray-100'
      : '';

  if (!editMode) {
    return (
      <Tooltip
        variant={errorsText ? 'error' : 'info'}
        tooltipText={
          errorsText ? errorsText : readOnly ? t('sheet.readOnly') : ''
        }
      >
        <div
          onClick={(e) => !readOnly && e.detail > 1 && setEditMode(true)}
          className={`h-full w-full py-4 pr-3 pl-4 ${cellBackgroundColor}`}
        >
          {nonEmptyValue}
        </div>
      </Tooltip>
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
    <Input
      classes="block w-full "
      value={value}
      onBlur={updateValue}
      ref={inputRef}
    />
  );
}
