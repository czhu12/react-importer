import { ImporterOutputFieldType } from '../../types';
import { has } from '../../utils/functional';
import { STATE_TO_CODES } from '../utils';
import { Transformer } from './base';

export class StateCodeTransformer extends Transformer {
  parse(value: ImporterOutputFieldType): ImporterOutputFieldType | undefined {
    const states = STATE_TO_CODES.map((s2c) => s2c[0].toLowerCase());
    if (has(states, value.toLowerCase())) {
      const index = states.indexOf(value.toLowerCase());
      return STATE_TO_CODES[index][1];
    }
  }
}
