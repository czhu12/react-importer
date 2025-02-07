import {
  ImporterOutputFieldType,
  ImporterTransformerDefinition,
  ImporterValidatorDefinition,
} from '../types';

// --------- Sheet Definition Types ---------
export interface SheetDefinition {
  id: string;
  name: string;
  columns: SheetColumnDefinition[];
}

export interface SheetColumnDefinition {
  key: string;
  label: string;
  type: SheetFieldType;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

// TODO: Add reference type
export type SheetFieldType = 'string';

// --------- Sheet State Types ---------
export interface SheetState {
  sheetId: string;
  rows: Record<string, ImporterOutputFieldType>[]; // key being column id
}
