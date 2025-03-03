import {
  ThemeVariant,
  ImporterValidationError,
  ParsedFile,
  SheetDefinition,
  SheetState,
  MappedData,
  OnDataColumnsMappedCallback,
  ColumnMapping,
  SheetRow,
} from '../types';

// --------- Importer Definition Types ---------

export interface ImporterDefinition {
  sheets: SheetDefinition[];
  // TODO: This probably needs to be some predefined list of themes to pick from
  theme?: ThemeVariant;
  // Called after the columns are mapped to sheet definitions by the user
  onDataColumnsMapped?: OnDataColumnsMappedCallback;
  allowManualDataEntry?: boolean;
  onComplete: (
    data: SheetState[],
    onProgress: (progress: number) => void
  ) => Promise<void>;
  locale?: string;
  preventUploadOnValidationErrors?:
    | boolean
    | ((errors: ImporterValidationError[]) => boolean);
}

/**
 * mapping - user is mapping the columns from the file to the sheet columns
 * preview - user is reviewing the data to be imported or is imputing data manually
 * submit  - user is submitting the data - during/after the onComplete callback
 * completed - the import process is completed
 * failed - the import process failed
 */
export type ImporterMode =
  | 'upload'
  | 'mapping'
  | 'preview'
  | 'submit'
  | 'completed'
  | 'failed';

export interface ImporterState {
  sheetDefinitions: SheetDefinition[];
  currentSheetId: string;
  mode: ImporterMode;
  validationErrors: ImporterValidationError[];
  sheetData: SheetState[];
  parsedFile?: ParsedFile;
  columnMappings?: ColumnMapping[];
  importProgress: number;
}

export type ImporterOutputFieldType = string | number;

export interface CellChangedPayload {
  sheetId: string;
  rowIndex: number;
  value: SheetRow;
}

export interface RemoveRowsPayload {
  sheetId: string;
  rows: SheetRow[];
}

export type ImporterAction =
  | {
      type: 'ENTER_DATA_MANUALLY';
      payload: {
        amountOfEmptyRowsToAdd: number;
      };
    } // Changes the mode to 'preview'
  | { type: 'FILE_PARSED'; payload: { parsed: ParsedFile } } // Sets the parsed file and changes the mode to 'mapping'
  | { type: 'UPLOAD' } // Changes the mode to 'upload' - used when going back from in the mapping screen
  | { type: 'COLUMN_MAPPING_CHANGED'; payload: { mappings: ColumnMapping[] } } // Sets the proper mappings
  | { type: 'DATA_MAPPED'; payload: { mappedData: MappedData } } // Sets mapped data as sheetData, optionally runs onDataColumnsMapped callback calls validations, changes the mode to 'preview'
  | {
      type: 'CELL_CHANGED';
      payload: CellChangedPayload;
    } // Searches for the cell and changes the value, calls validations
  | {
      type: 'REMOVE_ROWS';
      payload: RemoveRowsPayload;
    } // Removes rows from the sheetData
  | {
      type: 'ADD_EMPTY_ROW';
    } // Removes rows from the sheetData
  | { type: 'SHEET_CHANGED'; payload: { sheetId: string } } // Calls onComplete callback with state.sheetData, changes mode to 'submit'
  | { type: 'SUBMIT' } // Calls onComplete callback with state.sheetData, changes mode to 'submit'
  | { type: 'PROGRESS'; payload: { progress: number } } // Updates importProgress
  | { type: 'COMPLETED' } // Changes the mode to 'completed'
  | { type: 'FAILED' } // Changes the mode to 'failed' when importing failed
  | { type: 'PREVIEW' } // Changes the mode to 'preview' - used when uploading failed and user wants to retry
  | { type: 'MAPPING' } // Changes the mode to 'mapping' - used to go back to mappings screen in case there were some mapping issues
  | { type: 'RESET' }; // Resets the state to the initial state
