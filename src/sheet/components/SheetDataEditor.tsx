import { useEffect, useRef, useState } from 'preact/compat';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { filterEmptyRows, isPresent } from '../../utils';
import {
  CellClassParams,
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';

import { useTheme } from '../../theme/ThemeProvider';
import Margin from '../../components/Margin';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Button from '../../components/Button';
import Align from '../../components/Align';
import { SheetDefinition, SheetState } from '../types';
import { CellChangedPayload, ImporterValidationError } from '../../types';

interface Props {
  sheetDefinition: SheetDefinition;
  data: SheetState;
  onSubmit: () => void;
  sheetValidationErrors: ImporterValidationError[];
  setRowData: (payload: CellChangedPayload) => void;
}

export default function SheetDataEditor({
  sheetDefinition,
  data,
  onSubmit,
  sheetValidationErrors,
  setRowData,
}: Props) {
  const [onlyShowErrors, setOnlyShowErrors] = useState(false);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const validationRef = useRef(sheetValidationErrors);
  validationRef.current = sheetValidationErrors;

  useEffect(() => {
    setTimeout(() => {
      gridApi?.redrawRows();
    }, 0);
  }, [sheetValidationErrors]);

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  function cellErrors(colDef: ColDef, rowIndex: number) {
    return validationRef.current.filter(
      (validation) =>
        validation.columnId == colDef.field && validation.rowIndex === rowIndex
    );
  }

  function hasCellErrors(colDef: ColDef, rowIndex: number) {
    return cellErrors(colDef, rowIndex).length > 0;
  }

  const computeCellStyle = (params: CellClassParams) => {
    if (
      isPresent(params.colDef.field) &&
      isPresent(params.data.rowIndex) &&
      hasCellErrors(params.colDef, params.data.rowIndex)
    ) {
      return {
        color: 'rgba(192, 57, 43, 1.0)',
        backgroundColor: 'rgba(231, 76, 60, 0.3)',
        border: '1px solid rgba(192, 57, 43, 1.0)',
      };
    }
    return null;
  };

  const onSetOnlyShowErrors = (newValue: boolean) => {
    setOnlyShowErrors(newValue);
    let newRowData;
    if (newValue) {
      newRowData = data.rows.filter((_, index) =>
        sheetValidationErrors.some((error) => error.rowIndex === index)
      );
    } else {
      newRowData = data.rows;
    }
    gridApi?.setRowData(newRowData);
  };

  const onCellValueChanged = (params: CellValueChangedEvent) => {
    // Change the data and revalidate the entire dataset.
    // Because some validations are global validations.
    setRowData({
      sheetId: sheetDefinition.id,
      value: params.data,
      rowIndex: params.rowIndex as number,
    });
  };

  const hasData = () => {
    return filterEmptyRows(data).length > 0;
  };

  const hasErrors = sheetValidationErrors.length > 0;

  const theme = useTheme();

  return (
    <div>
      <Margin margin="20px 0">
        {(!hasData() || hasErrors) && (
          <div>
            <input
              checked={onlyShowErrors}
              onChange={(e) => {
                onSetOnlyShowErrors((e.target as HTMLInputElement).checked);
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
      </Margin>
      <div style={{ height: 500, width: '100%' }} className="ag-theme-alpine">
        <AgGridReact
          onCellValueChanged={onCellValueChanged}
          rowData={data.rows}
          tooltipShowDelay={0}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            editable: true,
          }}
          onGridReady={onGridReady}
        >
          {sheetDefinition.columns.map((column) => {
            return (
              <AgGridColumn
                resizable
                cellStyle={computeCellStyle}
                key={column.id}
                headerName={column.label}
                field={column.id}
                tooltipValueGetter={(params) => {
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
                }}
              />
            );
          })}
        </AgGridReact>
      </div>
      <Margin margin="20px 0">
        <Row>
          <Col>
            <Align right>
              {hasData() && <Button onClick={onSubmit}>Upload</Button>}
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
}
