import React, { useEffect, useRef, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Margin, Align, Row, Col } from './common';
import { filterEmptyRows, isPresent } from '../utils';
import { useTheme } from 'styled-components';
import {
  CellClassParams,
  CellValueChangedEvent,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import { ImporterField, ImporterFormattedData } from '../types';
import { ValidationResult } from '../validators';

const DataEditor = ({
  formattedData,
  fields,
  onSubmit,
  onBack,
  validationResult,
  setRowData,
}: {
  formattedData: ImporterFormattedData[];
  fields: ImporterField[];
  onSubmit: () => void;
  onBack?: () => void;
  validationResult: ValidationResult;
  setRowData: (data: ImporterFormattedData, rowIndex: number) => void;
}) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const validationRef = useRef(validationResult);
  validationRef.current = validationResult;

  useEffect(() => {
    setTimeout(() => {
      gridApi?.redrawRows();
    }, 0);
  }, [validationResult]);

  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api);
  };

  const [onlyShowErrors, setOnlyShowErrors] = useState(false);
  const computeCellStyle = (params: CellClassParams) => {
    if (
      isPresent(params.colDef.field) &&
      isPresent(params.data.rowIndex) &&
      validationRef.current.hasError(params.colDef.field!, params.data.rowIndex)
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
      const rowIndexesWithErrors = validationResult.rowIndexesWithErrors();
      newRowData = formattedData.filter((_, index) =>
        rowIndexesWithErrors.has(index)
      );
    } else {
      newRowData = formattedData;
    }
    gridApi?.setRowData(newRowData);
  };

  const onCellValueChanged = (params: CellValueChangedEvent) => {
    // Change the data and revalidate the entire dataset.
    // Because some validations are global validations.
    setRowData(params.data, params.rowIndex as number);
  };

  const hasData = () => {
    return filterEmptyRows(formattedData).length > 0;
  };

  const hasErrors =
    Object.keys(validationResult.errorsByFieldKeyByRowIndex).length > 0;

  const theme = useTheme();

  return (
    <div>
      <Margin margin="20px 0">
        {(!hasData() || hasErrors) && (
          <div>
            <input
              checked={onlyShowErrors}
              onChange={(e) => {
                onSetOnlyShowErrors(e.target.checked);
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
          rowData={formattedData}
          tooltipShowDelay={0}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            editable: true,
          }}
          onGridReady={onGridReady}
        >
          {fields.map((field) => {
            return (
              <AgGridColumn
                resizable
                cellStyle={computeCellStyle}
                key={field.key}
                headerName={field.label}
                field={field.key}
                tooltipValueGetter={(params) => {
                  const rowIndex = params.rowIndex;
                  if (
                    params.colDef &&
                    'field' in params.colDef &&
                    params.colDef.field
                  ) {
                    const columnName = params.colDef.field;

                    if (rowIndex == null) {
                      return '';
                    }

                    if (validationRef.current.hasError(columnName, rowIndex)) {
                      const errors = validationRef.current.getErrors(
                        columnName,
                        rowIndex
                      );
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
            {onBack && (
              <Button onClick={onBack} outline>
                Back
              </Button>
            )}
          </Col>
          <Col>
            <Align right>
              {hasData() && (
                <Button onClick={onSubmit}>
                  {validationResult.hasErrors() && 'Upload Rows Without Errors'}
                  {!validationResult.hasErrors() && 'Upload'}
                </Button>
              )}
            </Align>
          </Col>
        </Row>
      </Margin>
    </div>
  );
};

export default DataEditor;
