import { ImporterOutputFieldType } from '../../types';
import { Validator } from './base';

export class IntegerValidator extends Validator {
  isValid(fieldValue: ImporterOutputFieldType) {
    const valid =
      !isNaN(fieldValue as unknown as number) &&
      fieldValue !== null &&
      fieldValue !== undefined;

    if (!valid) {
      return this.definition.error || 'This is not a valid number';
    }
  }
}
