import { useEffect, useRef, useState } from 'preact/hooks';
import {
  ImporterOutputFieldType,
  SheetColumnDefinition,
  SheetState,
} from '../../types';
import { Input, Select, SheetTooltip } from '../../components';
import {
  extractReferenceColumnPossibleValues,
  isColumnReadOnly,
} from '../utils';
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

  const extractedValue =
    columnDefinition.type === 'enum'
      ? (columnDefinition.typeArguments.values.find((e) => e.value === value)
          ?.label ?? value)
      : value;
  const valueEmpty =
    extractedValue == null ||
    (typeof extractedValue === 'string' && extractedValue.trim() === '');
  // Use non-breaking space to keep the cell height
  const nonEmptyValue = valueEmpty ? '\u00A0' : extractedValue;
  const readOnly = isColumnReadOnly(columnDefinition);

  const cellBackgroundColor = errorsText
    ? 'bg-csv-importer-danger-extra-light'
    : readOnly
      ? 'bg-csv-importer-muted'
      : '';

  if (!editMode) {
    return (
      <SheetTooltip
        variant={errorsText ? 'error' : 'info'}
        tooltipText={
          errorsText ? errorsText : readOnly ? t('sheet.readOnly') : ''
        }
      >
        <div
          onClick={(e) => !readOnly && e.detail > 1 && setEditMode(true)}
          className={`h-full w-full py-4 pr-3 pl-4 ${cellBackgroundColor} truncate overflow-hidden whitespace-nowrap`}
          title={valueEmpty ? undefined : `${nonEmptyValue}`}
        >
          {nonEmptyValue}
        </div>
      </SheetTooltip>
    );
  }

  function updateValue(value: ImporterOutputFieldType) {
    setEditMode(false);

    if (
      columnDefinition.type === 'number' &&
      value !== '' &&
      !isNaN(Number(value))
    ) {
      onUpdated(Number(value));
    } else {
      onUpdated(value ?? '');
    }
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
      type={columnDefinition.type === 'number' ? 'number' : 'text'}
      classes="block w-full"
      value={value}
      onBlur={updateValue}
      ref={inputRef}
    />
  );
}
