import React, { useEffect, useRef, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Margin, Align, Row, Col } from './common';
import { filterEmptyRows, isPresent } from '../utils';


const DataEditor = ({ formattedData, fields, onSubmit, onBack, validationResult, setRowData }) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const validationRef = useRef(validationResult);
  validationRef.current = validationResult;

  useEffect(() => {
    setTimeout(() => {
      gridApi?.redrawRows();
    }, 0);
  }, [validationResult]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const [onlyShowErrors, _setOnlyShowErrors] = useState(false);
  const computeCellStyle = (params) => {
    if (
      isPresent(params.column.colDef.field) &&
      isPresent(params.data.rowIndex) &&
      validationRef.current.hasError(params.column.colDef.field, params.data.rowIndex)
    ) {
      return {
        color: 'rgba(192, 57, 43, 1.0)',
        backgroundColor: 'rgba(231, 76, 60, 0.3)',
        border: '1px solid rgba(192, 57, 43, 1.0)',
      }
    }
    return null;
  }

  const setOnlyShowErrors = (newValue) => {
    _setOnlyShowErrors(newValue);
    let newRowData;
    if (newValue) {
      const rowIndexesWithErrors = validationResult.rowIndexesWithErrors();
      newRowData = formattedData.filter((_, index) => rowIndexesWithErrors.has(index));
    } else {
      newRowData = formattedData;
    }
    gridApi.setRowData(newRowData);
  }

  const onCellValueChanged = (params) => {
    // Change the data and revalidate the entire dataset.
    // Because some validations are global validations.
    setRowData(params.data, params.rowIndex);
  }

  const shouldShowSubmit = () => {
    const hasData = filterEmptyRows(formattedData).length > 0;
    return hasData;
  }

  return (
    <div>
      <Margin margin="20px 0">
        <input checked={onlyShowErrors} onChange={(e) => {
          setOnlyShowErrors(e.target.checked);
        }} type="checkbox" name="row-errors" id="row-errors" />
        <label style={{marginLeft: '10px'}} htmlFor="row-errors">Only show rows with errors</label>
      </Margin>
      <div style={{height: 500, width: '100%'}} className="ag-theme-alpine">
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
          {fields.map(field => {
            return (
              <AgGridColumn
                resizable={true}
                cellStyle={computeCellStyle}
                key={field.key}
                headerName={field.label}
                tooltipValueGetter={(params) => {
                  const rowIndex = params.rowIndex;
                  const columnName = params.colDef.field;

                  if (validationRef.current.hasError(columnName, rowIndex)) {
                    const errors = validationRef.current.getErrors(columnName, rowIndex);
                    return errors.map(e => e.message).join(", ");
                  }
                }}
                field={field.key}
              ></AgGridColumn>
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
              {shouldShowSubmit() && (
                <Button onClick={onSubmit}>
                  {validationResult.hasErrors() && "Upload Rows Without Errors"}
                  {!validationResult.hasErrors() && "Upload"}
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
