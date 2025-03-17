import { RegexValidator } from './regex_validator';

export class PhoneNumberValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      validate: 'phone_number',
    });
  }
}
