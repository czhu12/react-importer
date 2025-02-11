import { hasData, eachWithObject } from '../utils/functional';
import { fieldIsRequired } from '../utils';
import { ImporterValidationError } from './types';
import { SheetColumnDefinition, SheetDefinition, SheetState } from '../types';
import { Validator } from './validator_definitions/base';
import { buildValidatorFromDefinition } from './validator_definitions';

function validateSheet(
  sheetDefinition: SheetDefinition,
  sheetData: SheetState
) {
  const validationErrors: ImporterValidationError[] = [];

  const validatorsByColumnId = eachWithObject<
    SheetColumnDefinition,
    Validator[]
  >(sheetDefinition.columns, (columnDefinition, obj) => {
    obj[columnDefinition.id] = [];
    if (!columnDefinition.validators) return;
    columnDefinition.validators.forEach((validatorDefinition) => {
      obj[columnDefinition.id].push(
        buildValidatorFromDefinition(validatorDefinition)
      );
    });
  });

  sheetDefinition.columns.forEach((columnDefinition) => {
    sheetData.rows.forEach((row, rowIndex) => {
      if (!hasData(row)) {
        return;
      }
      if (!(columnDefinition.id in row) && !fieldIsRequired(columnDefinition)) {
        return;
      }
      const value = row[columnDefinition.id];
      const validators = validatorsByColumnId[columnDefinition.id];

      validators.forEach((v) => {
        const result = v.isValid(value, row);
        if (result != null) {
          validationErrors.push({
            sheetId: sheetDefinition.id,
            columnId: columnDefinition.id,
            rowIndex,
            message: result,
          });
        }
      });
    });
  });

  return validationErrors;
}

export function applyValidation(
  sheetDefinitions: SheetDefinition[],
  sheetStates: SheetState[]
) {
  const validationErrors: ImporterValidationError[] = [];

  sheetDefinitions.forEach((sheetDefinition) => {
    const sheetData = sheetStates.find(
      (state) => state.sheetId === sheetDefinition.id
    );

    if (sheetData) {
      const errors = validateSheet(sheetDefinition, sheetData);

      validationErrors.push(...errors);
    }
  });

  return validationErrors;
}
