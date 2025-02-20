import { ParsedFile, SheetDefinition, SheetRow, SheetState } from '../types';
import { ColumnMapping, MappedData } from './types';

export { default as HeaderMapper } from './components/HeaderMapper';

export function getMappedData(
  sheetDefinitions: SheetDefinition[],
  mappings: ColumnMapping[],
  parsedFile: ParsedFile,
  currentData: SheetState[]
): MappedData {
  const data = parsedFile.data;

  return sheetDefinitions.map((sheetDefinition) => {
    let rows: SheetRow[] = [];

    const sheetMappings = mappings.filter(
      (mapping) => mapping.sheetId === sheetDefinition.id
    );

    // Leave sheet data empty if there are no mappings
    if (sheetMappings.length === 0) {
      rows =
        currentData.find((d) => d.sheetId === sheetDefinition.id)?.rows || [];
    } else {
      data.map((row) => {
        const newRow: SheetRow = {};

        sheetDefinition.columns.forEach((column) => {
          const mapping = sheetMappings.find(
            (mapping) => mapping.sheetColumnId === column.id
          );

          if (mapping != null) {
            newRow[mapping.sheetColumnId] = row[mapping.csvColumnName];
          }
        });

        rows.push(newRow);
      });
    }

    return {
      sheetId: sheetDefinition.id,
      rows,
    };
  });
}
