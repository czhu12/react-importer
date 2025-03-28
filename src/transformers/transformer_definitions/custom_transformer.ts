import {
  CustomTransformerDefinition,
  ImporterOutputFieldType,
} from '../../types';
import { Transformer } from './base';

export class CustomTransformer extends Transformer {
  key: string;

  parse: (
    value: ImporterOutputFieldType
  ) => ImporterOutputFieldType | undefined;

  constructor(definition: CustomTransformerDefinition) {
    super(definition);
    const { key, transformFn } = definition;
    this.key = key;
    this.parse = transformFn;
  }
}
