import { SheetColumnDefinition, SheetState } from '../types';

export const isUndefinedOrNull = (a: any) => {
  return a === null || a === undefined;
};

export const isPresent = (a: any) => !isUndefinedOrNull(a);

export const filterEmptyRows = (state: SheetState) => {
  return state.rows.filter(
    (d) => Object.keys(d).filter((k) => k !== 'rowIndex').length > 0
  );
};

export const fieldIsRequired = (columnDefinition: SheetColumnDefinition) => {
  if (columnDefinition.validators && columnDefinition.validators.length > 0) {
    const isRequired = columnDefinition.validators.find(
      (v) => v.validate === 'required'
    );
    return !!isRequired;
  }
  return false;
};

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
