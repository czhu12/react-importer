import { RegexValidator } from './regex_validator';

export class PostalCodeValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: 'postal_code',
    });
  }
}
