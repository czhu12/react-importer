import { ImporterOutputFieldType } from '../../types';
import { has } from '../../utils/functional';
import { Transformer } from './base';

export class PostalCodeTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    if (has(value, '-')) {
      return value.split('-')[0];
    }
  }
}
