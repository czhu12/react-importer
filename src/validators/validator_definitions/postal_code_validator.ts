import { RegexValidator } from './regex_validator';

export class PostalCodeValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\d{5}(-\d{4})?$/,
      validate: 'postal_code',
    });
  }
}
