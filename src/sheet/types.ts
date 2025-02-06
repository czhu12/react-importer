import {
  ImporterTransformerDefinition,
  ImporterValidatorDefinition,
} from '../types';

// --------- Sheet Definition Types ---------
export interface SheetDefinition {
  id: string;
  name: string;
  fields: SheetFieldDefinition[];
}

export interface SheetFieldDefinition {
  key: string;
  label: string;
  type: SheetFieldType;
  validators?: ImporterValidatorDefinition[];
  transformers?: ImporterTransformerDefinition[];
}

// TODO: Add reference type
export type SheetFieldType = 'string';

// --------- Sheet State Types ---------
export type SheetFieldData = 'string';

export interface SheetData {
  [key: string]: SheetFieldData;
}

export interface SheetDataRow {
  valid: boolean;
  values: SheetData;
}

export interface SheetState {
  rows: SheetDataRow[];
}
