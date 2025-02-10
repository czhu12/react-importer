import { ParsedFile, SheetDefinition, SheetRow } from '../types';
import { ColumnMapping, MappedData } from './types';

export { default as HeaderMapper } from './components/HeaderMapper';

export function getMappedData(
  sheetDefinitions: SheetDefinition[],
  mappings: ColumnMapping[],
  parsedFile: ParsedFile
): MappedData {
  const data = parsedFile.data;

  return sheetDefinitions.map((sheetDefinition) => {
    const rows: SheetRow[] = [];

    const sheetMappings = mappings.filter(
      (mapping) => mapping.sheetId === sheetDefinition.id
    );

    data.map((row) => {
      const newRow: SheetRow = {};

      Object.keys(row).forEach((csvColumnName) => {
        const mapping = sheetMappings.find(
          (mapping) => mapping.csvColumnName === csvColumnName
        );

        if (mapping != null) {
          newRow[mapping.sheetColumnId] = row[csvColumnName];
        }
      });

      rows.push(newRow);
    });

    return {
      sheetId: sheetDefinition.id,
      rows,
    };
  });
}
