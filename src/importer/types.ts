import {
  ImporterTheme,
  ImporterValidationError,
  ParsedFile,
  SheetDefinition,
  SheetState,
  MappedData,
  OnDataColumnsMappedCallback,
  FileWithPath,
  ColumnMapping,
} from '../types';

// --------- Importer Definition Types ---------

export interface ImporterDefinition {
  sheets: SheetDefinition[];
  // TODO: This probably needs to be some predefined list of themes to pick from
  theme: ImporterTheme;
  // Called after the columns are mapped to sheet definitions by the user
  onDataColumnsMapped?: OnDataColumnsMappedCallback;
  onComplete: (
    data: SheetState[],
    onProgress: (progress: number) => void
  ) => Promise<void>;
}

/**
 * initial - user can select to either upload a file or input data manually
 * mapping - user is mapping the columns from the file to the sheet columns
 * preview - user is reviewing the data to be imported or is imputing data manually
 * export  - user is exporting the data - during/after the onComplete callback
 * completed - the import process is completed
 * failed - the import process failed
 */
export type ImporterMode =
  | 'initial'
  | 'mapping'
  | 'preview'
  | 'export'
  | 'completed'
  | 'failed';

export interface ImporterState {
  currentSheetId: string;
  mode: ImporterMode;
  validationErrors: ImporterValidationError[];
  sheetData: SheetState[];
  parsedFile?: ParsedFile;
  columnMappings?: ColumnMapping[];
  importProgress?: number;
}

export type ImporterOutputFieldType = string;

export type ImporterAction =
  | { type: 'ENTER_DATA_MANUALLY' } // Changes the mode to 'preview'
  | { type: 'FILE_UPLOADED'; payload: { file: FileWithPath } } // Calls Papa.parse and dispatches FILE_PARSED
  | { type: 'FILE_PARSED'; payload: { parsed: ParsedFile } } // Sets the parsed file and changes the mode to 'mapping'
  | { type: 'COLUMN_MAPPING_CHANGED'; payload: { mappings: ColumnMapping[] } } // Sets the proper mappings
  | { type: 'DATA_MAPPED'; payload: { mappedData: MappedData } } // Sets mapped data as sheetData, optionally runs onDataColumnsMapped callback calls validations, changes the mode to 'preview'
  | {
      type: 'DATA_VALIDATED';
      payload: { validationErrors: ImporterValidationError[] };
    } // Sets validation errors
  | {
      type: 'CELL_CHANGED';
      payload: {
        sheetId: string;
        rowIndex: number;
        columnId: string;
        value: ImporterOutputFieldType;
      };
    } // Searches for the cell and changes the value, calls validations
  | { type: 'IMPORT' } // Calls onComplete callback with state.sheetData
  | { type: 'PROGRESS'; payload: { progress: number } } // Updates importProgress
  | { type: 'COMPLETED' } // Changes the mode to 'completed'
  | { type: 'FAILED' }; // Changes the mode to 'failed' when importing failed
