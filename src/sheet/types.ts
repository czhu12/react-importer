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

export interface SheetColumnDefinition {
  id: string;
  label: string;
  type: SheetFieldType;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

// TODO: Add reference type
export type SheetFieldType = 'string';
export type SheetRow = Record<string, ImporterOutputFieldType>;

// --------- Sheet State Types ---------
export interface SheetState {
  sheetId: string;
  rows: SheetRow[]; // key being column id
}
