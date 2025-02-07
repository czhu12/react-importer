import { SheetState } from '../types';

export type MappedSheetData = SheetState;

export interface MappedData {
  sheets: MappedSheetData[];
}

export interface ColumnMapping {
  csvColumnName: string;
  sheetId: string;
  sheetColumnId: string;
}

export type OnDataColumnsMappedCallback = (data: MappedData) => MappedData;

export interface MapperState {
  columnMappings: ColumnMapping[];
}
