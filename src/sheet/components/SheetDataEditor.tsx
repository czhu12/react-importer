import { useMemo, useState } from 'preact/compat';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { filterEmptyRows } from '../../utils';
import { SheetDefinition, SheetState, SheetRow } from '../types';
import {
  CellChangedPayload,
  ImporterOutputFieldType,
  ImporterValidationError,
} from '../../types';
import SheetDataEditorCell from './SheetDataEditorCell';

const columnHelper = createColumnHelper<SheetRow>();

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  allData: SheetState[];
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  setRowData,
}: Props) {
  const [onlyShowErrors, setOnlyShowErrors] = useState(false);

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

  const onCellValueChanged = (
    rowIndex: number,
    columnId: string,
    value: ImporterOutputFieldType
  ) => {
    const rowValue = { ...data.rows[rowIndex] };
    rowValue[columnId] = value;

    setRowData({
      sheetId: sheetDefinition.id,
      value: rowValue,
      rowIndex,
    });
  };

  function cellErrors(columnId: string, rowIndex: number) {
    return sheetValidationErrors.filter(
      (validation) =>
        validation.columnId === columnId && validation.rowIndex === rowIndex
    );
  }

  function hasCellErrors(columnId: string, rowIndex: number) {
    return cellErrors(columnId, rowIndex).length > 0;
  }

  const hasData = filterEmptyRows(data).length > 0;
  const hasErrors = sheetValidationErrors.length > 0;

  const displayOnlyShowErrorsCheckbox = !hasData || hasErrors;

  return (
    <div>
      <div className="my-5">
        {displayOnlyShowErrorsCheckbox && (
          <div>
            <input
              checked={onlyShowErrors}
              onChange={(e) => {
                setOnlyShowErrors((e.target as HTMLInputElement).checked);
              }}
              type="checkbox"
              name="row-errors"
              id="row-errors"
            />
            <label style={{ marginLeft: '10px' }} htmlFor="row-errors">
              Only show rows with errors
            </label>
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
      </div>

      <div className="max-h-[80vh] overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="sticky top-0 bg-white py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell, cellIndex) => {
                  const columnId = sheetDefinition.columns[cellIndex].id;
                  // TODO: Check if it works correctly for 2 idneitcal rows
                  const rowIndex = data.rows.indexOf(row.original);

                  return (
                    <td
                      key={cell.id}
                      // TODO: Perhaps we might need some more fency tooltip?
                      title={cellErrors(columnId, rowIndex)
                        .map((e) => e.message)
                        .join(', ')}
                      className={`py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 ${hasCellErrors(columnId, rowIndex) ? 'bg-red-100' : ''} `}
                    >
                      <SheetDataEditorCell
                        columnDefinition={
                          sheetDefinition.columns.find(
                            (c) => c.id === columnId
                          )!
                        }
                        allData={allData}
                        value={cell.getValue() as ImporterOutputFieldType}
                        onUpdated={(value) =>
                          onCellValueChanged(rowIndex, columnId, value)
                        }
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
