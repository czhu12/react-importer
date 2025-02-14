import {
  ImporterOutputFieldType,
  IncludesValidatorDefinition,
} from '../../types';
import { Validator } from './base';

export class IncludesValidator extends Validator {
  values: ImporterOutputFieldType[];

  constructor(definition: IncludesValidatorDefinition) {
    super(definition);
    this.values = definition.values;
    if (!this.values) {
      throw new Error('Missing `values` for `includes` validator');
    }
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    if (!this.values.includes(fieldValue)) {
      return this.definition.error || 'This value is not valid';
    }
  }
}
