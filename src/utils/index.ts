import {
  ImporterField,
  ImporterFormattedData,
  ImporterHeaderMappings,
  ImporterOutputFieldType,
} from '../types';
import { ValidationResult } from '../validators';

export const isUndefinedOrNull = (a: any) => {
  return a === null || a === undefined;
};

export const isPresent = (a: any) => !isUndefinedOrNull(a);

export const formatData = (
  headerMappings: ImporterHeaderMappings,
  data: ImporterOutputFieldType[][]
) => {
  const output: ImporterFormattedData[] = [];
  for (let rowIndex = 1; rowIndex < data.length; rowIndex++) {
    const item: ImporterFormattedData = {
      rowIndex: rowIndex - 1,
    } as ImporterFormattedData;
    const row = data[rowIndex];
    Object.keys(headerMappings).forEach((k) => {
      const headerMapping = headerMappings[k];
      const columnIndex = headerMapping.columnIndex;
      if (headerMapping.selectedField) {
        item[headerMapping.selectedField.value] = row[columnIndex];
      }
    });
    output.push(item);
  }
  return output;
};

export const buildSuggestedHeaderMappings = (
  fields: ImporterField[],
  headers: string[]
) => {
  const headerMappings: ImporterHeaderMappings = {};
  headers.forEach((header, columnIndex) => {
    const foundField = fields.find((f) => {
      const normalizedKey = f.key
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '');
      const normalizedHeader = header
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '');
      return normalizedKey === normalizedHeader;
    });

    if (!foundField) {
      return;
    }

    headerMappings[columnIndex] = {
      columnIndex,
      name: header,
      selectedField: {
        value: foundField.key,
        label: foundField.label,
      },
    };
  });
  /*
    create header mappings
    (columnIndex => {columnIndex, name: inputHeader, selectedField: {value: '', label: ''}})
  */
  return headerMappings;
};

export const filterEmptyRows = (formattedData: ImporterFormattedData[]) => {
  return formattedData.filter(
    (d) => Object.keys(d).filter((k) => k !== 'rowIndex').length > 0
  );
};

export const filterInvalidRows = (
  formattedData: ImporterFormattedData[],
  validationResult: ValidationResult
) => {
  const rowIndexesWithErrors = validationResult.rowIndexesWithErrors();
  formattedData = formattedData.filter(
    (row) => !rowIndexesWithErrors.has(row.rowIndex)
  );
  return filterEmptyRows(formattedData);
};

export const removeTemporaryKeys = (formattedData: ImporterFormattedData[]) => {
  formattedData.forEach((f) => {
    delete f.rowIndex;
  });
  return formattedData;
};

export const fieldIsRequired = (field: ImporterField) => {
  if (field.validators && field.validators.length > 0) {
    const isRequired = field.validators.find((v) => v.validate === 'required');
    return !!isRequired;
  }
  return false;
};

export const buildFinalData = (
  formattedData: ImporterFormattedData[],
  validationResult: ValidationResult
) => {
  return removeTemporaryKeys(
    filterInvalidRows(filterEmptyRows(formattedData), validationResult)
  );
};

export function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
