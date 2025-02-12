import { useEffect, useState } from 'preact/compat';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { filterEmptyRows, isPresent } from '../../utils';
import {
  AllCommunityModule,
  ModuleRegistry,
  CellClassParams,
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

import { useTheme } from '../../theme/ThemeProvider';
import { SheetDefinition, SheetState, SheetRow } from '../types';
import { CellChangedPayload, ImporterValidationError } from '../../types';

ModuleRegistry.registerModules([AllCommunityModule]);

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  sheetValidationErrors,
  setRowData,
}: Props) {
  const [onlyShowErrors, setOnlyShowErrors] = useState(false);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  const rowData = data.rows.filter(
    (_, index) =>
      !onlyShowErrors ||
      sheetValidationErrors.some((error) => error.rowIndex === index)
  );

  useEffect(() => {
    setTimeout(() => {
      gridApi?.redrawRows();
    }, 0);
  }, [sheetValidationErrors, gridApi]);

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  function cellErrors(colDef: ColDef, rowIndex: number) {
    return sheetValidationErrors.filter(
      (validation) =>
        validation.columnId === colDef.field && validation.rowIndex === rowIndex
    );
  }

  function hasCellErrors(colDef: ColDef, rowIndex: number) {
    return cellErrors(colDef, rowIndex).length > 0;
  }

  const onCellValueChanged = (params: CellValueChangedEvent) => {
    setRowData({
      sheetId: sheetDefinition.id,
      value: params.data,
      rowIndex: params.rowIndex as number,
    });
  };

  function displayCelleError(params: CellClassParams) {
    return (
      isPresent(params.colDef?.field) &&
      isPresent(params.rowIndex) &&
      hasCellErrors(params.colDef, params.rowIndex)
    );
  }

  const hasData = () => {
    return filterEmptyRows(data).length > 0;
  };

  const hasErrors = sheetValidationErrors.length > 0;

  const theme = useTheme();

  return (
    <div>
      <div className="my-5">
        {(!hasData() || hasErrors) && (
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
        {hasData() && !hasErrors && (
          <div
            style={{
              color: theme.colors.success,
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
            }}
          >
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
      <div style={{ height: 500, width: '100%' }} className="ag-theme-alpine">
        <AgGridReact<SheetRow>
          onCellValueChanged={onCellValueChanged}
          rowData={rowData}
          tooltipShowDelay={0}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            editable: true,
          }}
          onGridReady={onGridReady}
          columnDefs={sheetDefinition.columns.map((column) => ({
            resizable: true,
            sortable: true,
            cellClassRules: {
              'cell-error': displayCelleError,
            },
            key: column.id,
            headerName: column.label,
            field: column.id,
            tooltipValueGetter: (params) => {
              const rowIndex = params.rowIndex;
              if (
                params.colDef &&
                'field' in params.colDef &&
                params.colDef.field
              ) {
                if (rowIndex == null) {
                  return '';
                }

                const errors = cellErrors(params.colDef, rowIndex);
                if (errors.length > 0) {
                  return errors.map((e) => e.message).join(', ');
                }
              }

              return '';
            },
          }))}
        />
      </div>
    </div>
  );
}
