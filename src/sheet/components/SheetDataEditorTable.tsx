import { flexRender, Table } from '@tanstack/react-table';
import SheetDataEditorCell from './SheetDataEditorCell';
import { SheetDefinition, SheetRow, SheetState } from '../types';
import { ImporterOutputFieldType, ImporterValidationError } from '../../types';
import { Checkbox } from '../../components';
import { useTranslations } from '../../i18';

interface Props {
  table: Table<SheetRow>;
  sheetDefinition: SheetDefinition;
  visibleData: SheetRow[];
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
  visibleData,
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
    selectedRows.length === visibleData.length && visibleData.length > 0;

  function toggleSelectAll() {
    if (selectAllChecked) {
      setSelectedRows([]);
    } else {
      setSelectedRows(visibleData);
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
    'sticky top-0 bg-gray-100 py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 z-10 whitespace-nowrap ';
  const cellClass = 'text-sm font-medium whitespace-nowrap text-gray-900';

  return (
    <div className="max-h-[80vh] overflow-auto">
      <table className="min-w-full divide-y divide-gray-300 border-y border-gray-300">
        <thead className="sticky top-0 z-10 bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className={`${headerClass} sticky left-0 z-20`}>
                <Checkbox
                  id={`Select all checkbox for ${sheetDefinition.id}`}
                  checked={selectAllChecked}
                  setChecked={toggleSelectAll}
                />
              </th>

              {headerGroup.headers.map((header) => (
                <th key={header.id} className={`min-w-48 ${headerClass}`}>
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
              <td
                className={`bg-gray-100 ${cellClass} sticky left-0 z-5 py-3.5 pr-3 pl-4`}
              >
                <Checkbox
                  // TODO: Check if it works correctly for 2 idnetical rows
                  id={`Selection checkbox for ${sheetDefinition.id} ${row.id}`}
                  checked={selectedRows.includes(row.original)}
                  setChecked={() => toggleRowSelection(row.original)}
                  label={`${Number(row.id) + 1}`}
                />
              </td>

              {row.getVisibleCells().map((cell, cellIndex) => {
                const columnId = sheetDefinition.columns[cellIndex].id;
                // TODO: Check if it works correctly for 2 identical rows
                const rowIndex = allData
                  .find((d) => d.sheetId === sheetDefinition.id)!
                  .rows.indexOf(row.original);

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
