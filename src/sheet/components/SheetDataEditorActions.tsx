import { useState } from 'preact/hooks';
import {
  ButtonGroup,
  ButtonGroupType,
  ConfirmationModal,
  Input,
  Select,
  Tooltip,
} from '../../components';
import { downloadSheetAsCsv } from '../utils';
import {
  XMarkIcon,
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
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
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
  errorColumnFilter: string | null;
  setErrorColumnFilter: (mode: string | null) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
  addEmptyRow: () => void;
  sheetValidationErrors: ImporterValidationError[];
  rowValidationSummary: Record<SheetViewMode, number>;
  resetState: () => void;
}

export default function SheetDataEditorActions({
  sheetDefinition,
  rowData,
  selectedRows,
  setSelectedRows,
  viewMode,
  setViewMode,
  searchPhrase,
  setSearchPhrase,
  errorColumnFilter,
  setErrorColumnFilter,
  removeRows,
  addEmptyRow,
  sheetValidationErrors,
  rowValidationSummary,
  resetState,
}: Props) {
  const { t } = useTranslations();

  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);
  const [resetConfirmationModalOpen, setResetConfirmationModalOpen] =
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
      label: t('sheet.all') + ` (${rowValidationSummary.all})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('all');
      },
      variant: 'default',
    },
    {
      value: 'valid',
      label: t('sheet.valid') + ` (${rowValidationSummary.valid})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('valid');
      },
      variant: 'default',
    },
    {
      value: 'errors',
      label: t('sheet.invalid') + ` (${rowValidationSummary.errors})`,
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
      <div className="flex grow flex-wrap items-center gap-5">
        <div>
          <ButtonGroup activeButton={viewMode} buttons={viewModeButtons} />
        </div>

        <Input
          clearable
          value={searchPhrase}
          onChange={(v) => setSearchPhrase(v as string)}
          placeholder={t('sheet.search')}
          iconBuilder={(props) => <MagnifyingGlassIcon {...props} />}
        />

        <Tooltip
          tooltipText={t(
            selectedRows.length <= 0
              ? 'sheet.removeRowsTooltipNoRowsSelected'
              : 'sheet.removeRowsTooltip'
          )}
        >
          <TrashIcon
            className={`h-6 w-6 ${
              selectedRows.length > 0 ? 'cursor-pointer' : disabledButtonClasses
            }`}
            onClick={() => setRemoveConfirmationModalOpen(true)}
          />
        </Tooltip>

        <Tooltip tooltipText={t('sheet.addRowsTooltip')}>
          <PlusIcon className="h-6 w-6 cursor-pointer" onClick={addEmptyRow} />
        </Tooltip>

        <Tooltip tooltipText={t('sheet.downloadSheetTooltip')}>
          <ArrowDownTrayIcon
            className={`h-6 w-6 ${
              rowData.length > 0 ? 'cursor-pointer' : disabledButtonClasses
            }`}
            onClick={() => downloadSheetAsCsv(sheetDefinition, rowData)}
          />
        </Tooltip>

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
      <Tooltip className="ml-5" tooltipText={t('sheet.resetTooltip')}>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => setResetConfirmationModalOpen(true)}
        />
      </Tooltip>

      <ConfirmationModal
        open={resetConfirmationModalOpen}
        setOpen={setResetConfirmationModalOpen}
        onConfirm={resetState}
        title={t('sheet.resetConfirmationModalTitle')}
        confirmationText={t('sheet.resetConfirmationModalConfirmationText')}
        subTitle={t('sheet.resetConfirmationModalSubTitle')}
        variant="danger"
      />
    </div>
  );
}
