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
        guidelines: column.guidelines,
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
