import { ImporterOutputFieldType, SheetRow } from '../../types';
import {
  ImporterValidatorDefinitionBase,
  ImporterValidatorOutput,
} from '../types';

export class Validator {
  definition: ImporterValidatorDefinitionBase;

  constructor(definition: ImporterValidatorDefinitionBase) {
    this.definition = definition;
  }

  isValid(
    _fieldValue: ImporterOutputFieldType,
    _row: SheetRow
  ): ImporterValidatorOutput {
    throw new Error('Not Implemented');
  }
}
