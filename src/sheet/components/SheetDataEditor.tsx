import { useEffect, useMemo, useState } from 'preact/compat';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { SheetDefinition, SheetState, SheetRow, SheetViewMode } from '../types';
import {
  CellChangedPayload,
  ImporterOutputFieldType,
  ImporterValidationError,
  RemoveRowsPayload,
} from '../../types';
import {
  ConfirmationModal,
  ButtonGroup,
  ButtonGroupType,
} from '../../components';
import SheetDataEditorTable from './SheetDataEditorTable';
import {
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import SheetDataEditorHeader from './SheetDataEditorHeader';
import { downloadSheetAsCsv } from '../utils';

const columnHelper = createColumnHelper<SheetRow>();

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  allData: SheetState[];
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
  addEmptyRow: () => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  setRowData,
  removeRows,
  addEmptyRow,
}: Props) {
  const { t } = useTranslations();

  const [selectedRows, setSelectedRows] = useState<SheetRow[]>([]);
  const [viewMode, setViewMode] = useState<SheetViewMode>('all');
  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);

  const disabledButtonClasses =
    'pointer-events-none cursor-not-allowed opacity-50';

  const rowValidationSummary = useMemo(() => {
    const allRows = data.rows;
    const validRows = allRows.filter(
      (_, index) =>
        !sheetValidationErrors.some((error) => error.rowIndex === index)
    );
    const invalidRows = allRows.filter((_, index) =>
      sheetValidationErrors.some((error) => error.rowIndex === index)
    );
    return {
      all: allRows.length,
      valid: validRows.length,
      invalid: invalidRows.length,
    };
  }, [data, sheetValidationErrors]);

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
      label: t('sheet.invalid') + ` (${rowValidationSummary.invalid})`,
      onClick: () => {
        setSelectedRows([]);
        setViewMode('errors');
      },
      variant: 'danger',
    },
  ];

  useEffect(() => {
    setSelectedRows([]); // On changing sheets
    setViewMode('all');
  }, [sheetDefinition]);

  const rowData = useMemo(() => {
    switch (viewMode) {
      case 'errors':
        return data.rows.filter((_, index) =>
          sheetValidationErrors.some((error) => error.rowIndex === index)
        );
      case 'valid':
        return data.rows.filter(
          (_, index) =>
            !sheetValidationErrors.some((error) => error.rowIndex === index)
        );
      case 'all':
      default:
        return data.rows;
    }
  }, [data, viewMode, sheetValidationErrors]);

  const columns = useMemo(
    () =>
      sheetDefinition.columns.map((column) =>
        columnHelper.accessor(column.id, {
          header: () => <SheetDataEditorHeader column={column} />,
        })
      ),
    [sheetDefinition]
  );

  const table = useReactTable<SheetRow>({
    data: rowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  function onRemoveRows() {
    removeRows({ rows: selectedRows, sheetId: sheetDefinition.id });
    setSelectedRows([]);
  }

  function onCellValueChanged(
    rowIndex: number,
    columnId: string,
    value: ImporterOutputFieldType
  ) {
    const rowValue = { ...data.rows[rowIndex] };
    rowValue[columnId] = value;

    setRowData({
      sheetId: sheetDefinition.id,
      value: rowValue,
      rowIndex,
    });
  }

  return (
    <div>
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

        <PlusIcon
          className="ml-5 h-6 w-6 cursor-pointer"
          onClick={addEmptyRow}
        />

        <ArrowDownTrayIcon
          className={`ml-5 h-6 w-6 ${
            data.rows.length > 0 ? 'cursor-pointer' : disabledButtonClasses
          }`}
          onClick={() => downloadSheetAsCsv(sheetDefinition, data)}
        />
      </div>

      <SheetDataEditorTable
        table={table}
        sheetDefinition={sheetDefinition}
        visibleData={rowData}
        allData={allData}
        sheetValidationErrors={sheetValidationErrors}
        onCellValueChanged={onCellValueChanged}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
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
