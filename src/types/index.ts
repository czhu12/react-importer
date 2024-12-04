import { ParseResult } from 'papaparse';
import { ValidationResult } from '../validators';

// TODO THIS BRANCH: This about separating the types into their own files - like reducer, valdations, etc
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

export interface ImporterField {
  key: string;
  label: string;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

// TODO THIS BRANCH: Should it be narrowed down from any?
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

// TODO THIS BRANCH: Should we allow more fields?
export interface ImporterTheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    info: string;
    warning: string;
    light: string;
    dark: string;
  };
}

// VALIDATORS
export type ValidationResultError = {
  [key: string]: ImporterValidatorOutput[];
};

export interface ImporterValidatorOutput {
  valid: boolean;
  message?: string;
  errorType?: string; // TODO THIS BRANCH: Should it be something more specific?
}

export type ImporterValidatorType =
  | 'regex_matches'
  | 'required'
  | 'unique'
  | 'includes'
  | 'multi_includes'
  | 'is_integer'
  | 'phone_number'
  | 'email'
  | 'postal_code'
  | 'custom';

export type ImporterValidatorDefinition =
  | ImporterValidatorDefinitionBase
  | MultiIncludesValidatorDefinition
  | IncludesValidatorDefinition
  | CustomValidatorDefinition
  | RegexValidatorDefinition;

export interface ImporterValidatorDefinitionBase {
  validate: ImporterValidatorType;
  error?: string;
}

export interface MultiIncludesValidatorDefinition
  extends ImporterValidatorDefinitionBase {
  delimiter?: string | RegExp;
  values: ImporterOutputFieldType[];
}

export interface IncludesValidatorDefinition
  extends ImporterValidatorDefinitionBase {
  values: ImporterOutputFieldType[];
}

export interface RegexValidatorDefinition
  extends ImporterValidatorDefinitionBase {
  regex: string | RegExp;
}

export interface CustomValidatorDefinition
  extends ImporterValidatorDefinitionBase {
  key: string;
  validateFn: (
    fieldValue: ImporterOutputFieldType,
    row: ImporterFormattedData
  ) => ImporterValidatorOutput;
}

// TRANSFORMERS
export type ImporterTransformerDefinition =
  | ImporterTransformerDefinitionBase
  | CustomTransformerDefinition;

export type ImporterTransformerType =
  | 'phone_number'
  | 'postal_code'
  | 'state_code'
  | 'strip'
  | 'custom';

export interface ImporterTransformerDefinitionBase {
  transformer: ImporterTransformerType;
}

export interface CustomTransformerDefinition
  extends ImporterTransformerDefinitionBase {
  key: string;
  transformFn: (value: ImporterOutputFieldType) => ImporterOutputFieldType;
}
