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
import SheetDataEditorTable from './SheetDataEditorTable';
import SheetDataEditorHeader from './SheetDataEditorHeader';
import SheetDataEditorActions from './SheetDataEditorActions';
import { findRowIndex } from '../utils';

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
  const [selectedRows, setSelectedRows] = useState<SheetRow[]>([]);
  const [viewMode, setViewMode] = useState<SheetViewMode>('all');
  const [errorColumnFilter, setErrorColumnFilter] = useState<string | null>(
    null
  );

  useEffect(() => {
    setSelectedRows([]); // On changing sheets
    setViewMode('all');
  }, [sheetDefinition]);

  const rowData = useMemo(() => {
    let rows = data.rows;
    switch (viewMode) {
      case 'errors':
        rows = data.rows.filter((_, index) =>
          sheetValidationErrors.some((error) => error.rowIndex === index)
        );
        break;
      case 'valid':
        rows = data.rows.filter(
          (_, index) =>
            !sheetValidationErrors.some((error) => error.rowIndex === index)
        );
        break;
      case 'all':
      default:
        rows = data.rows;
    }

    if (errorColumnFilter != null) {
      rows = rows.filter((row) => {
        const rowIndex = findRowIndex(allData, sheetDefinition.id, row);
        const error = sheetValidationErrors.find(
          (error) =>
            error.rowIndex === rowIndex && error.columnId === errorColumnFilter
        );
        return error != null;
      });
    }

    return rows;
  }, [
    data,
    viewMode,
    sheetValidationErrors,
    errorColumnFilter,
    sheetDefinition.id,
    allData,
  ]);

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
      errors: invalidRows.length,
    };
  }, [data, sheetValidationErrors]);

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
      <SheetDataEditorActions
        sheetDefinition={sheetDefinition}
        rowData={rowData}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        viewMode={viewMode}
        setViewMode={setViewMode}
        errorColumnFilter={errorColumnFilter}
        setErrorColumnFilter={setErrorColumnFilter}
        removeRows={removeRows}
        addEmptyRow={addEmptyRow}
        sheetValidationErrors={sheetValidationErrors}
        rowValidationSummary={rowValidationSummary}
      />

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
    </div>
  );
}
