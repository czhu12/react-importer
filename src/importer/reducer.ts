import { ImporterAction, ImporterState, SheetDefinition } from '../types';
import { applyValidations } from '../validators';

function buildInitialState(sheetDefinitions: SheetDefinition[]): ImporterState {
  return {
    sheetDefinitions,
    currentSheetId: sheetDefinitions[0].id,
    mode: 'initial',
    validationErrors: [],
    sheetData: [],
    importProgress: 0,
  };
}

const reducer = (
  state: ImporterState,
  action: ImporterAction
): ImporterState => {
  switch (action.type) {
    case 'ENTER_DATA_MANUALLY': {
      const emptyData = action.payload.sheetDefinitions.map((sheet) => ({
        sheetId: sheet.id,
        rows: Array.from(
          { length: action.payload.amountOfEmptyRowsToAdd },
          () => ({})
        ),
      }));

      return { ...state, mode: 'preview', sheetData: emptyData };
    }
    case 'FILE_PARSED':
      return { ...state, parsedFile: action.payload.parsed, mode: 'mapping' };
    case 'COLUMN_MAPPING_CHANGED': {
      return {
        ...state,
        columnMappings: action.payload.mappings,
      };
    }
    case 'DATA_MAPPED': {
      return {
        ...state,
        sheetData: action.payload.mappedData,
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

          newRows[action.payload.rowIndex] = action.payload.value;

          return { ...sheet, rows: newRows };
        } else {
          return sheet;
        }
      });

      return {
        ...state,
        sheetData: newData,
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
    default:
      return state;
  }
};

export { reducer, buildInitialState };
