import { SheetDefinition } from '../types';
import { ImporterRequirementsType } from './types';

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

      if (
        column.validators?.some(
          (validator) => validator.validate === 'required'
        )
      ) {
        groups.required.push(requirement);
      } else if (column.suggestedMappingKeywords) {
        groups.optional.push(requirement);
      }
    });
  });

  return groups;
}
