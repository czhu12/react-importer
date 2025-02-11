import {
  ImporterTransformerDefinitionBase,
  ImporterTransformerType,
} from '../types';
import { Transformer } from './base';
import { CustomTransformer } from './custom_transformer';
import { PhoneNumberTransformer } from './phone_number_transformer';
import { PostalCodeTransformer } from './postal_code_transformer';
import { StateCodeTransformer } from './state_code_transformer';
import { StripTransformer } from './strip_transformer';

export * from './base';
export * from './custom_transformer';
export * from './phone_number_transformer';
export * from './postal_code_transformer';
export * from './state_code_transformer';
export * from './strip_transformer';

export function buildTransformerFromDefinition(
  definition: ImporterTransformerDefinitionBase
) {
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
