import { ImporterFormattedData, ImporterOutputFieldType } from '../types';

export type ValidationResultError = {
  [key: string]: ImporterValidatorOutput[];
};

export interface ImporterValidatorOutput {
  valid: boolean;
  message?: string;
  errorType?: string;
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
