import { applyTransformations } from '../transformers';
import {
  CellChangedPayload,
  ImporterAction,
  ImporterState,
  SheetDefinition,
  SheetRow,
} from '../types';
import { applyValidations } from '../validators';

function recalculateCalculatedColumns(
  row: SheetRow,
  payload: CellChangedPayload,
  state: ImporterState
): SheetRow {
  const sheetDefinition = state.sheetDefinitions.find(
    (s) => s.id === payload.sheetId
  );

  if (sheetDefinition != null) {
    const calculatedColumns = sheetDefinition.columns.filter(
      (column) => column.type === 'calculated'
    );

    calculatedColumns.forEach((column) => {
      row[column.id] = column.typeArguments.getValue(row);
    });
  }

  return row;
}

function buildInitialState(sheetDefinitions: SheetDefinition[]): ImporterState {
  return {
    sheetDefinitions,
    currentSheetId: sheetDefinitions[0].id,
    mode: 'upload',
    validationErrors: [],
    sheetData: sheetDefinitions.map((sheet) => ({
      sheetId: sheet.id,
      rows: [],
    })),
    importProgress: 0,
  };
}

const reducer = (
  state: ImporterState,
  action: ImporterAction
): ImporterState => {
  switch (action.type) {
    case 'ENTER_DATA_MANUALLY': {
      const emptyData = state.sheetDefinitions.map((sheet) => ({
        sheetId: sheet.id,
        rows: Array.from(
          { length: action.payload.amountOfEmptyRowsToAdd },
          () => ({})
        ),
      }));

      return { ...state, mode: 'preview', sheetData: emptyData };
    }
    case 'FILE_UPLOADED':
      return { ...state, rowFile: action.payload.file };
    case 'FILE_PARSED':
      return { ...state, parsedFile: action.payload.parsed, mode: 'mapping' };
    case 'UPLOAD':
      return { ...state, mode: 'upload' };
    case 'COLUMN_MAPPING_CHANGED': {
      return {
        ...state,
        columnMappings: action.payload.mappings,
      };
    }
    case 'DATA_MAPPED': {
      return {
        ...state,
        sheetData: applyTransformations(
          state.sheetDefinitions,
          action.payload.mappedData
        ),
        mode: 'preview',
        validationErrors: applyValidations(
          state.sheetDefinitions,
          action.payload.mappedData
        ),
      };
    }
    case 'CELL_CHANGED': {
      const currentData = state.sheetData;

      const newData = currentData.map((sheet) => {
        if (sheet.sheetId === action.payload.sheetId) {
          const newRows = [...sheet.rows];

          newRows[action.payload.rowIndex] = recalculateCalculatedColumns(
            action.payload.value,
            action.payload,
            state
          );

          return { ...sheet, rows: newRows };
        } else {
          return sheet;
        }
      });

      return {
        ...state,
        sheetData: applyTransformations(state.sheetDefinitions, newData),
        validationErrors: applyValidations(state.sheetDefinitions, newData),
      };
    }

    case 'REMOVE_ROWS': {
      const newData = state.sheetData.map((sheet) => {
        if (sheet.sheetId === action.payload.sheetId) {
          return {
            ...sheet,
            rows: sheet.rows.filter(
              (row) => !action.payload.rows.includes(row)
            ),
          };
        }

        return sheet;
      });

      return {
        ...state,
        sheetData: newData,
        validationErrors: applyValidations(state.sheetDefinitions, newData),
      };
    }

    case 'ADD_EMPTY_ROW': {
      const newData = state.sheetData.map((data) => {
        if (data.sheetId !== state.currentSheetId) {
          return data;
        }

        return {
          ...data,
          rows: [...data.rows, {}],
        };
      });

      return { ...state, sheetData: newData };
    }

    case 'SHEET_CHANGED':
      return { ...state, currentSheetId: action.payload.sheetId };
    case 'SUBMIT':
      return { ...state, mode: 'submit' };
    case 'PROGRESS':
      return { ...state, importProgress: action.payload.progress };
    case 'COMPLETED':
      return { ...state, mode: 'completed' };
    case 'FAILED':
      return { ...state, mode: 'failed' };
    case 'PREVIEW':
      return { ...state, mode: 'preview' };
    case 'MAPPING':
      return { ...state, mode: 'mapping' };
    case 'RESET':
      return buildInitialState(state.sheetDefinitions);
    default:
      return state;
  }
};

export { reducer, buildInitialState };
