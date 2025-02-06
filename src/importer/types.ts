import { ParseResult } from 'papaparse';
import {
  ImporterTheme,
  ImporterTransformerDefinition,
  ImporterValidatorDefinition,
} from '../types';
import { ValidationResult } from '../validators';

// --------- Importer Definition Types ---------
export interface ImporterField {
  key: string;
  label: string;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

export interface ImporterDefinition {
  fields: ImporterField[];
  theme: ImporterTheme;
  onComplete: (
    data: ImporterOutputField[],
    onProgress: (progress: number) => void
  ) => Promise<void>;
}

export interface ImporterState {
  fields: ImporterField[];
  currentStep: number;
  progress: number;
  pending: boolean;
  failed: boolean;
  validationResult: ValidationResult;
  statistics: ImporterStatistics;
  headerMappings: ImporterHeaderMappings;
  parsed: ParsedFile | null;
  formattedData: ImporterFormattedData[];
}

export type ParsedFile = ParseResult<ImporterOutputFieldType[]>;

export type ImporterFormattedData = Omit<
  Record<string, ImporterOutputFieldType>,
  'rowIndex'
> & {
  rowIndex?: number;
};

export interface ImporterHeaderMappings {
  [key: string]: ImporterHeaderMappingEntry;
}

export interface ImporterHeaderMappingEntrySelectedField {
  label: string;
  value: string;
}

export interface ImporterHeaderMappingEntry {
  columnIndex: number;
  name: string | null;
  ignored?: boolean;
  confirmed?: boolean;
  selectedField: ImporterHeaderMappingEntrySelectedField | null;
}

export type ImporterOutputFieldType = string;

export interface ImporterOutputField {
  [key: string]: ImporterOutputFieldType;
}

export type ImporterFieldStatisicErrorCount = {
  [key: string]: number;
  total: number;
};

export interface ImporterFieldStatistic {
  counts?: {
    isNull: number;
  };
  errorTypeCounts?: ImporterFieldStatisicErrorCount;
}

export interface ImporterStatistics {
  total: number | null;
  statisticsByFieldKey: Record<string, ImporterFieldStatistic>;
}

export interface ImporterFieldStatistics {
  total: number | null;
  statistics: ImporterFieldStatistic | undefined;
}

export type ImporterAction =
  | { type: 'RESTART' }
  | { type: 'DECREMENT_STEP' }
  | { type: 'COMPLETED_MAPPINGS' }
  | { type: 'SET_CURRENT_STEP'; payload: { currentStep: number } }
  | { type: 'FILE_PARSED'; payload: { parsed: ParsedFile } }
  | {
      type: 'HEADER_MAPPINGS_CHANGED';
      payload: { headerMappings: ImporterHeaderMappings };
    }
  | {
      type: 'CELL_CHANGED';
      payload: { index: number; row: ImporterFormattedData };
    }
  | { type: 'PROGRESS'; payload: { progress: number } }
  | { type: 'PENDING' }
  | { type: 'COMPLETE' }
  | { type: 'FAILED' };
