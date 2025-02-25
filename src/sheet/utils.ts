import { isEmptyCell } from '../utils';
import {
  SheetColumnReferenceDefinition,
  SheetDefinition,
  SheetRow,
  SheetState,
} from '../types';
import { DOWNLOADED_CSV_SEPARATOR } from '../constants';

export function extractReferenceColumnPossibleValues(
  columnDefinition: SheetColumnReferenceDefinition,
  allData: SheetState[]
) {
  const referenceArguments = columnDefinition.typeArguments;
  const referenceSheetData = allData.find(
    (data) => data.sheetId === referenceArguments.sheetId
  );

  return (
    referenceSheetData?.rows
      ?.map((row) => row[referenceArguments.sheetColumnId])
      ?.filter((c) => !isEmptyCell(c))
      ?.filter((c, index, allData) => allData.indexOf(c) === index) ?? [] // Remove dupplicates
  );
}

export function downloadSheetAsCsv(
  sheetDefinition: SheetDefinition,
  data: SheetRow[]
) {
  const headers = sheetDefinition.columns
    .map((column) => column.id)
    .join(DOWNLOADED_CSV_SEPARATOR);

  const rows = data.map((row) =>
    sheetDefinition.columns
      .map((column) => row[column.id])
      .join(DOWNLOADED_CSV_SEPARATOR)
  );

  const csv = [headers, ...rows].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${sheetDefinition.label}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
