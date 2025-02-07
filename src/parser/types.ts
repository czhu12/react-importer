import { ParseResult } from 'papaparse';

export type CSVParsedData = Record<string, string>;

export type ParsedFile = ParseResult<CSVParsedData>;
