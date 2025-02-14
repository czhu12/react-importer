import { NUMBER_OF_EXAMPLES_IN_MAPPING } from '../constants';
import {
  ColumnMapping,
  CSVParsedData,
  MapperOptionValue,
  SheetDefinition,
} from '../types';

function buildSheetSuggestedHeaderMappings(
  sheet: SheetDefinition,
  csvHeaders: string[]
): ColumnMapping[] {
  const mappings: ColumnMapping[] = [];

  csvHeaders.forEach((header) => {
    const foundField = sheet.columns.find((column) => {
      const normalizedColumnId = column.id
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '');
      const normalizedHeader = header
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '');
      return normalizedColumnId === normalizedHeader;
    });

    if (!foundField) {
      return;
    }

    mappings.push({
      csvColumnName: header,
      sheetId: sheet.id,
      sheetColumnId: foundField.id,
    });
  });

  return mappings;
}

export const buildSuggestedHeaderMappings = (
  sheetDefinitions: SheetDefinition[],
  csvHeaders: string[]
) => {
  const headerMappings: ColumnMapping[] = [];

  sheetDefinitions.forEach((sheet) => {
    const headers = csvHeaders;
    const mappings = buildSheetSuggestedHeaderMappings(sheet, headers);
    headerMappings.push(...mappings);
  });

  return headerMappings;
};

export function calculateNewMappingsForCsvColumnMapingChanged(
  currentMapping: ColumnMapping[],
  csvColumnName: string,
  newCsvColumnMaping: MapperOptionValue[] | null
): ColumnMapping[] {
  if (newCsvColumnMaping == null) {
    return currentMapping;
  }

  // Make sure we don't allow dupplicate mappings for the same sheet column
  const currentFilteredMapping = currentMapping.filter(
    (currentM) =>
      newCsvColumnMaping.find(
        (newM) =>
          currentM.sheetId === newM.sheetId &&
          currentM.sheetColumnId === newM.sheetColumnId
      ) == null
  );

  const mappingsForOtherColumns = currentFilteredMapping.filter(
    (m) => m.csvColumnName !== csvColumnName
  );

  return [
    ...mappingsForOtherColumns,
    ...newCsvColumnMaping.map((m) => ({ ...m, csvColumnName })),
  ];
}

export function calculateMappingExamples(
  data: CSVParsedData[],
  csvColumnName: string
) {
  return data
    .map((d) => d[csvColumnName])
    .filter((v) => v != null && v.trim() !== '')
    .slice(0, NUMBER_OF_EXAMPLES_IN_MAPPING);
}
