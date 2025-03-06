import {
  CSVCell,
  ParsedFile,
  SheetColumnDefinition,
  SheetDefinition,
  SheetRow,
} from '../types';
import { ColumnMapping, MappedData } from './types';

export { default as HeaderMapper } from './components/HeaderMapper';

function mapReferenceColumns(
  sheetDefinitions: SheetDefinition[],
  mappedData: MappedData
): MappedData {
  return mappedData.map((sheetData) => {
    const sheetDefinition = sheetDefinitions.find(
      (definition) => definition.id === sheetData.sheetId
    );

    if (sheetDefinition == null) {
      return sheetData;
    }

    const rows = sheetData.rows.map((row, rowIndex) => {
      const newRow: SheetRow = { ...row };

      sheetDefinition.columns
        .filter((column) => column.type === 'reference')
        .forEach((column) => {
          const referenceSheetData = mappedData.find(
            (data) => data.sheetId === column.typeArguments.sheetId
          );

          if (referenceSheetData != null) {
            const referenceColumn = referenceSheetData.rows.map(
              (r) => r[column.typeArguments.sheetColumnId]
            );

            const referenceValue = referenceColumn[rowIndex];

            newRow[column.id] = referenceValue;
          }
        });

      return newRow;
    });

    return {
      ...sheetData,
      rows,
    };
  });
}

/// Checks to see if CSV value doesn't match the enum label, if so converts it into enum value
function mapEnumLabelValues(
  csvColumnValue: CSVCell,
  columnDefinition: SheetColumnDefinition
): CSVCell {
  if (columnDefinition.type === 'enum') {
    const enumDefinition = columnDefinition.typeArguments.values.find(
      (definition) => definition.label === csvColumnValue
    );

    if (enumDefinition != null) {
      return enumDefinition.value;
    }
  }

  return csvColumnValue;
}

export function getMappedData(
  sheetDefinitions: SheetDefinition[],
  mappings: ColumnMapping[],
  parsedFile: ParsedFile
): MappedData {
  const data = parsedFile.data;

  const mappedData = sheetDefinitions.map((sheetDefinition) => {
    const rows: SheetRow[] = [];

    const sheetMappings = mappings.filter(
      (mapping) => mapping.sheetId === sheetDefinition.id
    );

    data.map((row) => {
      const newRow: SheetRow = {};

      sheetDefinition.columns.forEach((column) => {
        const mapping = sheetMappings.find(
          (mapping) => mapping.sheetColumnId === column.id
        );

        if (mapping != null) {
          newRow[mapping.sheetColumnId] = mapEnumLabelValues(
            row[mapping.csvColumnName],
            column
          );
        }
      });

      rows.push(newRow);
    });

    return {
      sheetId: sheetDefinition.id,
      rows,
    };
  });

  return mapReferenceColumns(sheetDefinitions, mappedData);
}
