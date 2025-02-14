import {
  ImporterOutputFieldType,
  ImporterTransformerDefinition,
  ImporterValidatorDefinition,
} from '../types';

// --------- Sheet Definition Types ---------
export interface SheetDefinition {
  id: string;
  label: string;
  columns: SheetColumnDefinition[];
}

export type SheetColumnDefinition =
  | SheetColumnStringDefinition
  | SheetColumnReferenceDefinition;

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

interface SheetColumnReferenceDefinition extends SheetColumnBaseDefinition {
  type: 'reference';
  typeArguments: {
    sheetId: string;
    sheetColumnId: string;
  };
}

// --------- Sheet State Types ---------
export type SheetRow = Record<string, ImporterOutputFieldType>;

export interface SheetState {
  sheetId: string;
  rows: SheetRow[]; // key being column id
}
