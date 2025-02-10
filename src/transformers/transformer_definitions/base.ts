import { ImporterOutputFieldType } from '../../types';
import {
  ImporterTransformerDefinitionBase,
  ImporterTransformerType,
} from '../types';
import { CustomTransformer } from './custom_transformer';
import { PhoneNumberTransformer } from './phone_number_transformer';
import { PostalCodeTransformer } from './postal_code_transformer';
import { StateCodeTransformer } from './state_code_transformer';
import { StripTransformer } from './strip_transformer';

export class Transformer {
  definition: ImporterTransformerDefinitionBase;

  constructor(definition: ImporterTransformerDefinitionBase) {
    this.definition = definition;
  }

  static buildFromDefinition(definition: ImporterTransformerDefinitionBase) {
    const mapping: {
      [key in ImporterTransformerType]: typeof Transformer;
    } = {
      phone_number: PhoneNumberTransformer,
      postal_code: PostalCodeTransformer,
      state_code: StateCodeTransformer,
      strip: StripTransformer,
      custom: CustomTransformer,
    };
    if (!(definition.transformer in mapping)) {
      throw new Error(
        `Missing transformer for ${
          definition.transformer
        }. Valid transformer options are ${Object.keys(mapping).join(', ')}`
      );
    }
    const FoundValidator = mapping[definition.transformer];
    return new FoundValidator(definition);
  }

  transform(value: ImporterOutputFieldType): ImporterOutputFieldType {
    const newValue = this.parse(value);
    if (newValue) return newValue;
    return value;
  }

  parse(_value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    throw new Error('Not Implemented');
  }
}
