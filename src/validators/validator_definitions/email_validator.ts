import { RegexValidator } from './regex_validator';

export class EmailValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: 'email',
    });
  }
}
