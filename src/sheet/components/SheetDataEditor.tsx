import { useEffect, useMemo, useState } from 'preact/compat';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { filterEmptyRows } from '../../utils';
import { SheetDefinition, SheetState, SheetRow } from '../types';
import {
  CellChangedPayload,
  ImporterOutputFieldType,
  ImporterValidationError,
  RemoveRowsPayload,
} from '../../types';
import { Checkbox, ConfirmationModal } from '../../components';
import SheetDataEditorTable from './SheetDataEditorTable';
import { TrashIcon } from '@heroicons/react/24/outline';

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
  const [selectedRows, setSelectedRows] = useState<SheetRow[]>([]);
  const [onlyShowErrors, setOnlyShowErrors] = useState(false);
  const [removeConfirmationModalOpen, setRemoveConfirmationModalOpen] =
    useState(false);

  useEffect(() => {
    setSelectedRows([]); // On changing sheets
  }, [sheetDefinition]);

  const rowData = useMemo(
    () =>
      data.rows.filter(
        (_, index) =>
          !onlyShowErrors ||
          sheetValidationErrors.some((error) => error.rowIndex === index)
      ),
    [data, onlyShowErrors, sheetValidationErrors]
  );

  const columns = useMemo(
    () =>
      sheetDefinition.columns.map((column) =>
        columnHelper.accessor(column.id, {
          header: column.label,
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

  const hasData = filterEmptyRows(data).length > 0;
  const hasErrors = sheetValidationErrors.length > 0;

  const displayOnlyShowErrorsCheckbox = !hasData || hasErrors;

  return (
    <div>
      <div className="my-5 flex items-center">
        {displayOnlyShowErrorsCheckbox && (
          <div>
            <Checkbox
              id={`Only show errors checkbox for ${sheetDefinition.id}`}
              checked={onlyShowErrors}
              setChecked={(checked) => {
                setSelectedRows([]);
                setOnlyShowErrors(checked);
              }}
              label="Only show rows with errors"
            />
          </div>
        )}
        {!displayOnlyShowErrorsCheckbox && (
          <div className="text-success flex items-center font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
            All rows pass validation!
          </div>
        )}

        {selectedRows.length > 0 && (
          <TrashIcon
            className="ml-16 h-6 w-6 cursor-pointer"
            onClick={() => setRemoveConfirmationModalOpen(true)}
          />
        )}
      </div>

      <SheetDataEditorTable
        table={table}
        sheetDefinition={sheetDefinition}
        data={data}
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
        title="Remove rows"
        confirmationText="Remove"
        subTitle={`Are you sure you want to remove ${selectedRows.length} rows?`}
      />
    </div>
  );
}
