import { SheetDefinition } from '../types';
import { ImporterRequirementsType } from './types';
import { fieldIsRequired } from '../validators';

export function getImporterRequirements(
  sheets: SheetDefinition[]
): ImporterRequirementsType {
  const groups: ImporterRequirementsType = {
    required: [],
    optional: [],
  };

  sheets.forEach((sheet) => {
    sheet.columns.forEach((column) => {
      const requirement = {
        sheetId: sheet.id,
        columnId: column.id,
        columnLabel: column.label,
      };

      if (fieldIsRequired(column)) {
        groups.required.push(requirement);
      } else {
        groups.optional.push(requirement);
      }
    });
  });

  return groups;
}

export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${Math.round(size)} ${units[unitIndex]}`;
};
