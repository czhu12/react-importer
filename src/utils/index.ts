import { SheetState } from '../types';

export const isUndefinedOrNull = (a: any) => {
  return a === null || a === undefined;
};

export const isPresent = (a: any) => !isUndefinedOrNull(a);

export const filterEmptyRows = (state: SheetState) => {
  return state.rows.filter((d) => Object.keys(d).length > 0);
};

export const isEmptyCell = (value: any) => {
  return isUndefinedOrNull(value) || value === '';
};
