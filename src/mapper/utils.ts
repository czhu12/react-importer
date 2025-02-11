import { NUMBER_OF_EXAMPLES_IN_MAPPING } from '../constants';
import { ColumnMapping, CSVParsedData, SheetDefinition } from '../types';

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
  newMaping: ColumnMapping | null
) {
  if (newMaping == null) {
    return currentMapping.filter((m) => m.csvColumnName !== csvColumnName);
  }

  // Make sure we don't allow dupplicate mappings for the same sheet column
  const currentFilteredMapping = currentMapping.filter(
    (m) =>
      m.sheetId !== newMaping.sheetId ||
      m.sheetColumnId !== newMaping.sheetColumnId
  );

  const existingMappingForCsvColumn = currentFilteredMapping.find(
    (m) => m.csvColumnName === csvColumnName
  );

  if (existingMappingForCsvColumn == null) {
    return [...currentFilteredMapping, newMaping];
  }

  return currentFilteredMapping.map((mapping) => {
    if (mapping.csvColumnName === csvColumnName) {
      return newMaping;
    }
    return mapping;
  });
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
