import { RegexValidator } from './regex_validator';

export class PhoneNumberValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: 'phone_number',
    });
  }
}
