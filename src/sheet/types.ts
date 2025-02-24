import {
  ImporterOutputFieldType,
  ImporterTransformerDefinition,
  ImporterValidatorDefinition,
  SelectOption,
} from '../types';

// --------- Sheet Definition Types ---------
export interface SheetDefinition {
  id: string;
  label: string;
  columns: SheetColumnDefinition[];
}

export type SheetColumnDefinition =
  | SheetColumnStringDefinition
  | SheetColumnReferenceDefinition
  | SheetColumnEnumDefinition;

interface SheetColumnBaseDefinition {
  id: string;
  label: string;
  isReadOnly?: boolean;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

interface SheetColumnStringDefinition extends SheetColumnBaseDefinition {
  type: 'string';
}

export interface SheetColumnReferenceDefinition
  extends SheetColumnBaseDefinition {
  type: 'reference';
  typeArguments: {
    sheetId: string;
    sheetColumnId: string;
  };
}

interface SheetColumnEnumDefinition extends SheetColumnBaseDefinition {
  type: 'enum';
  typeArguments: {
    values: SelectOption<string>[];
  };
}

// --------- Sheet State Types ---------
export type SheetRow = Record<string, ImporterOutputFieldType>;

export interface SheetState {
  sheetId: string;
  rows: SheetRow[]; // key being column id
}

export enum SheetViewMode {
  ALL = 'all',
  VALID = 'valid',
  ERRORS = 'errors',
}
