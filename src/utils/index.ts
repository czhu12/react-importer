import { SheetState } from '../types';

export const isUndefinedOrNull = (a: any) => {
  return a === null || a === undefined;
};

export const isPresent = (a: any) => !isUndefinedOrNull(a);

export const filterEmptyRows = (state: SheetState) => {
  return state.rows.filter(
    (d) => Object.keys(d).filter((k) => k !== 'rowIndex').length > 0
  );
};
