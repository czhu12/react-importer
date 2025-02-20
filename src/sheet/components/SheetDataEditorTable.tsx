import { flexRender, Table } from '@tanstack/react-table';
import SheetDataEditorCell from './SheetDataEditorCell';
import { SheetDefinition, SheetRow, SheetState } from '../types';
import { ImporterOutputFieldType, ImporterValidationError } from '../../types';
import { Checkbox } from '../../components';
import { useTranslations } from '../../i18';

interface Props {
  table: Table<SheetRow>;
  sheetDefinition: SheetDefinition;
  data: SheetState;
  allData: SheetState[];
  sheetValidationErrors: ImporterValidationError[];
  onCellValueChanged: (
    rowIndex: number,
    columnId: string,
    value: ImporterOutputFieldType
  ) => void;
  selectedRows: SheetRow[];
  setSelectedRows: (rows: SheetRow[]) => void;
}

export default function SheetDataEditorTable({
  table,
  sheetDefinition,
  data,
  allData,
  sheetValidationErrors,
  onCellValueChanged,
  selectedRows,
  setSelectedRows,
}: Props) {
  const { t } = useTranslations();

  function cellErrors(columnId: string, rowIndex: number) {
    return sheetValidationErrors.filter(
      (validation) =>
        validation.columnId === columnId && validation.rowIndex === rowIndex
    );
  }

  const selectAllChecked =
    selectedRows.length === data.rows.length && data.rows.length > 0;

  function toggleSelectAll() {
    if (selectAllChecked) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.rows);
    }
  }

  function toggleRowSelection(row: SheetRow) {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((r) => r !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  }

  const headerClass =
    'sticky top-0 bg-white py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 z-10';
  const cellClass = 'text-sm font-medium whitespace-nowrap text-gray-900';

  return (
    <div className="max-h-[80vh] overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className={headerClass}>
                <Checkbox
                  id={`Select all checkbox for ${sheetDefinition.id}`}
                  checked={selectAllChecked}
                  setChecked={toggleSelectAll}
                />
              </th>

              {headerGroup.headers.map((header) => (
                <th key={header.id} className={headerClass}>
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
              <td className={`${cellClass} py-3.5 pr-3 pl-4`}>
                <Checkbox
                  // TODO: Check if it works correctly for 2 idnetical rows
                  id={`Selection checkbox for ${sheetDefinition.id} ${row}`}
                  checked={selectedRows.includes(row.original)}
                  setChecked={() => toggleRowSelection(row.original)}
                />
              </td>

              {row.getVisibleCells().map((cell, cellIndex) => {
                const columnId = sheetDefinition.columns[cellIndex].id;
                // TODO: Check if it works correctly for 2 idneitcal rows
                const rowIndex = data.rows.indexOf(row.original);
                const cellErrorsText = cellErrors(columnId, rowIndex)
                  .map((e) => t(e.message))
                  .join(', ');

                return (
                  <td key={cell.id} className={cellClass}>
                    <SheetDataEditorCell
                      columnDefinition={
                        sheetDefinition.columns.find((c) => c.id === columnId)!
                      }
                      allData={allData}
                      value={cell.getValue() as ImporterOutputFieldType}
                      onUpdated={(value) =>
                        onCellValueChanged(rowIndex, columnId, value)
                      }
                      clearRowsSelection={() => setSelectedRows([])}
                      errorsText={cellErrorsText}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
