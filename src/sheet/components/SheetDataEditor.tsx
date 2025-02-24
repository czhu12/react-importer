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
import { ConfirmationModal } from '../../components';
import SheetDataEditorTable from './SheetDataEditorTable';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useTranslations } from '../../i18';
import SheetDataEditorHeader from './SheetDataEditorHeader';

const columnHelper = createColumnHelper<SheetRow>();

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  allData: SheetState[];
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
  removeRows: (payload: RemoveRowsPayload) => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  setRowData,
  removeRows,
}: Props) {
  const { t } = useTranslations();

  const [selectedRows, setSelectedRows] = useState<SheetRow[]>([]);
  const [viewMode, setViewMode] = useState<SheetViewMode>(SheetViewMode.ALL);
  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);

  useEffect(() => {
    setSelectedRows([]); // On changing sheets
    setViewMode(SheetViewMode.ALL);
  }, [sheetDefinition]);

  const rowData = useMemo(() => {
    switch (viewMode) {
      case SheetViewMode.ERRORS:
        return data.rows.filter((_, index) =>
          sheetValidationErrors.some((error) => error.rowIndex === index)
        );
      case SheetViewMode.VALID:
        return data.rows.filter(
          (_, index) =>
            !sheetValidationErrors.some((error) => error.rowIndex === index)
        );
      case SheetViewMode.ALL:
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
          <span className="isolate inline-flex rounded-md shadow-xs">
            <button
              type="button"
              className={`relative inline-flex cursor-pointer items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${
                viewMode === SheetViewMode.ALL ? '!bg-gray-900 text-white' : ''
              }`}
              onClick={() => {
                setSelectedRows([]);
                setViewMode(SheetViewMode.ALL);
              }}
            >
              All
            </button>
            <button
              type="button"
              className={`relative -ml-px inline-flex cursor-pointer items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${
                viewMode === SheetViewMode.VALID
                  ? '!bg-gray-900 text-white'
                  : ''
              }`}
              onClick={() => {
                setSelectedRows([]);
                setViewMode(SheetViewMode.VALID);
              }}
            >
              Valid
            </button>
            <button
              type="button"
              className={`text-danger relative -ml-px inline-flex cursor-pointer items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 ${
                viewMode === SheetViewMode.ERRORS ? '!bg-danger text-white' : ''
              }`}
              onClick={() => {
                setSelectedRows([]);
                setViewMode(SheetViewMode.ERRORS);
              }}
            >
              Invalid
            </button>
          </span>
        </div>

        {/* TODO: Add tooltip when disabled */}
        <TrashIcon
          className={`ml-8 h-6 w-6 cursor-pointer ${
            selectedRows.length > 0
              ? ''
              : 'pointer-events-none cursor-not-allowed opacity-50'
          }`}
          onClick={() => setRemoveConfirmationModalOpen(true)}
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
