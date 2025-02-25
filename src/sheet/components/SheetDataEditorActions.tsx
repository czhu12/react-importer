import { useState } from 'preact/hooks';
import {
  ButtonGroup,
  ButtonGroupType,
  ConfirmationModal,
  Select,
} from '../../components';
import { downloadSheetAsCsv } from '../utils';
import {
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import { SheetDefinition, SheetRow, SheetViewMode } from '../types';
import { ImporterValidationError, RemoveRowsPayload } from '../../types';
import { removeDuplicates } from '../../utils';

interface Props {
  sheetDefinition: SheetDefinition;
  rowData: SheetRow[];
  selectedRows: SheetRow[];
  setSelectedRows: (rows: SheetRow[]) => void;
  viewMode: SheetViewMode;
  setViewMode: (mode: SheetViewMode) => void;
  errorColumnFilter: string | null;
  setErrorColumnFilter: (mode: string | null) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
  addEmptyRow: () => void;
  sheetValidationErrors: ImporterValidationError[];
}

export default function SheetDataEditorActions({
  sheetDefinition,
  rowData,
  selectedRows,
  setSelectedRows,
  viewMode,
  errorColumnFilter,
  setErrorColumnFilter,
  setViewMode,
  removeRows,
  addEmptyRow,
  sheetValidationErrors,
}: Props) {
  const { t } = useTranslations();

  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);

  const disabledButtonClasses =
    'pointer-events-none cursor-not-allowed opacity-50';

  function errorFilterOption(columnId: string) {
    const columnDefinition = sheetDefinition.columns.find(
      (c) => c.id === columnId
    );

    const count = removeDuplicates(
      sheetValidationErrors
        .filter((error) => error.columnId === columnId)
        .map((row) => row.rowIndex)
    ).length;

    return {
      label: `${columnDefinition?.label || columnId} (${count})`,
      value: columnId,
    };
  }

  const filterByErrorOptions = removeDuplicates(
    sheetValidationErrors.map((error) => error.columnId)
  ).map((columnId) => errorFilterOption(columnId));

  if (
    errorColumnFilter != null &&
    filterByErrorOptions.find((option) => option.value === errorColumnFilter) ==
      null
  ) {
    filterByErrorOptions.push(errorFilterOption(errorColumnFilter));
  }

  const viewModeButtons: ButtonGroupType[] = [
    {
      value: 'all',
      label: t('sheet.all'),
      onClick: () => {
        setSelectedRows([]);
        setViewMode('all');
      },
      variant: 'default',
    },
    {
      value: 'valid',
      label: t('sheet.valid'),
      onClick: () => {
        setSelectedRows([]);
        setViewMode('valid');
      },
      variant: 'default',
    },
    {
      value: 'errors',
      label: t('sheet.invalid'),
      onClick: () => {
        setSelectedRows([]);
        setViewMode('errors');
      },
      variant: 'danger',
    },
  ];

  function onRemoveRows() {
    removeRows({ rows: selectedRows, sheetId: sheetDefinition.id });
    setSelectedRows([]);
  }

  return (
    <div className="my-5 flex items-center">
      <div>
        <ButtonGroup activeButton={viewMode} buttons={viewModeButtons} />
      </div>

      {/* TODO: Add tooltip when disabled */}
      <TrashIcon
        className={`ml-8 h-6 w-6 ${
          selectedRows.length > 0 ? 'cursor-pointer' : disabledButtonClasses
        }`}
        onClick={() => setRemoveConfirmationModalOpen(true)}
      />

      <PlusIcon className="ml-5 h-6 w-6 cursor-pointer" onClick={addEmptyRow} />

      <ArrowDownTrayIcon
        className={`mx-5 h-6 w-6 ${
          rowData.length > 0 ? 'cursor-pointer' : disabledButtonClasses
        }`}
        onClick={() => downloadSheetAsCsv(sheetDefinition, rowData)}
      />

      <Select
        clearable
        displayPlaceholderWhenSelected
        placeholder={t('sheet.filterByError')}
        classes="min-w-48"
        options={filterByErrorOptions}
        value={errorColumnFilter}
        onChange={(value) => setErrorColumnFilter(value as string)}
      />

      <ConfirmationModal
        open={removeConfirmationModalOpen}
        setOpen={setRemoveConfirmationModalOpen}
        onConfirm={onRemoveRows}
        title={t('sheet.removeConfirmationModalTitle')}
        confirmationText={t('sheet.removeConfirmationModalConfirmationText')}
        subTitle={t('sheet.removeConfirmationModalSubTitle', {
          rowsCount: selectedRows.length,
        })}
        variant="danger"
      />
    </div>
  );
}
