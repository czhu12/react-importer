import { ImporterOutputFieldType } from '../../types';
import { Transformer } from './base';

export class StripTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    if (typeof value === 'string') {
      return value.trim();
    }
  }
}
