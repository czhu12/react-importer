import { ImporterOutputFieldType } from '../../types';
import { Transformer } from './base';

export class PhoneNumberTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    if (typeof value === 'string') {
      return value.replace(/[^0-9]/g, '');
    }
  }
}
