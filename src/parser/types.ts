import { ParseResult } from 'papaparse';

export type CSVCell = string;

export type CSVParsedData = Record<string, CSVCell>;

export type ParsedFile = ParseResult<CSVParsedData>;
