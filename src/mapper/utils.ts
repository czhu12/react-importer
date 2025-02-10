import { ColumnMapping, SheetDefinition } from '../types';

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
