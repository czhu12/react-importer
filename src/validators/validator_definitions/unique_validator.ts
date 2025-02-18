import { ImporterOutputFieldType } from '../../types';
import { ImporterValidatorDefinitionBase } from '../types';
import { Validator } from './base';

export class UniqueValidator extends Validator {
  seen: {
    [key: string]: boolean;
  };

  constructor(definition: ImporterValidatorDefinitionBase) {
    super(definition);
    this.seen = {};
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    if (fieldValue in this.seen) {
      return this.definition.error || 'validators.unique';
    }
    this.seen[fieldValue] = true;
  }
}
