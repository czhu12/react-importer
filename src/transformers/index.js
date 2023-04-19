import { has } from '../utils/functional'
import { STATE_TO_CODES } from './utils'

export class Transformer {
  parse(value) {
    return value
  }

  static buildFromDefinition(definition) {
    const mapping = {
      phone_number: PhoneNumberTransformer,
      postal_code: PostalCodeTransformer,
      state_code: StateCodeTransformer
    }
    if (!(definition.transformer in mapping)) {
      throw new Error(`Missing validator for ${definition.transformer}`)
    }
    const FoundValidator = mapping[definition.transformer]
    return new FoundValidator(definition)
  }

  format(value) {
    const newValue = this.parse(value)
    if (newValue) return newValue
    return value
  }
}

export class PhoneNumberTransformer extends Transformer {
  parse(value) {
    return value.replace(/[^0-9]/g, '')
  }
}

export class StateCodeTransformer extends Transformer {
  parse(value) {
    const states = STATE_TO_CODES.map((s2c) => s2c[0].toLowerCase())
    if (has(states, value.toLowerCase())) {
      const index = states.indexOf(value.toLowerCase())
      return STATE_TO_CODES[index][1]
    }
  }
}

export class PostalCodeTransformer extends Transformer {
  parse(value) {
    if (has(value, '-')) {
      return value.split('-')[0]
    }
  }
}
