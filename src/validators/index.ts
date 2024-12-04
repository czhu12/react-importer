import { hasData, eachWithObject } from '../utils/functional';
import { fieldIsRequired } from '../utils';
import {
  CustomValidatorDefinition,
  ImporterField,
  ImporterFieldStatisicErrorCount,
  ImporterFieldStatistic,
  ImporterFormattedData,
  ImporterHeaderMappings,
  ImporterOutputFieldType,
  ImporterStatistics,
  ImporterValidatorDefinitionBase,
  ImporterValidatorOutput,
  ImporterValidatorType,
  IncludesValidatorDefinition,
  MultiIncludesValidatorDefinition,
  RegexValidatorDefinition,
  ValidationResultError,
} from '../types';

export class Validator {
  definition: ImporterValidatorDefinitionBase;

  constructor(definition: ImporterValidatorDefinitionBase) {
    this.definition = definition;
  }

  isValid(
    fieldValue: ImporterOutputFieldType,
    row: ImporterFormattedData
  ): ImporterValidatorOutput {
    throw new Error('Not Implemented');
  }

  static buildFromDefinition(definition: ImporterValidatorDefinitionBase) {
    const mapping: {
      [key in ImporterValidatorType]: typeof Validator;
    } = {
      regex_matches: RegexValidator,
      required: RequiredValidator,
      unique: UniqueValidator,
      includes: IncludesValidator,
      multi_includes: MultiIncludesValidator,
      is_integer: IntegerValidator,
      postal_code: PostalCodeValidator,
      phone_number: PhoneNumberValidator,
      email: EmailValidator,
      custom: CustomValidator,
    };
    if (!(definition.validate in mapping)) {
      throw new Error(
        `Missing validator for ${
          definition.validate
        }. Valid validator options are ${Object.keys(mapping).join(', ')}`
      );
    }
    const FoundValidator = mapping[definition.validate];
    return new FoundValidator(definition);
  }
}

export class MultiIncludesValidator extends Validator {
  delimiter: string | RegExp;
  values: ImporterOutputFieldType[];

  constructor(definition: MultiIncludesValidatorDefinition) {
    super(definition);
    this.delimiter = definition.delimiter || /[,|]/;
    this.values = definition.values;
    if (!this.values) {
      throw new Error('Missing values for `multi_includes` validator');
    }
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    const values = fieldValue.split(this.delimiter);
    // If any of the values are not in the list of valid values, then the field is invalid
    if (values.some((value) => !this.values.includes(value.trim()))) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not valid',
        errorType: 'includes',
      };
    }
    return { valid: true };
  }
}

export class IncludesValidator extends Validator {
  values: ImporterOutputFieldType[];

  constructor(definition: IncludesValidatorDefinition) {
    super(definition);
    this.values = definition.values;
    if (!this.values) {
      throw new Error('Missing `values` for `includes` validator');
    }
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    if (!this.values.includes(fieldValue)) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not valid',
        errorType: 'includes',
      };
    }
    return { valid: true };
  }
}

export class CustomValidator extends Validator {
  key?: string;
  validateFn: (
    fieldValue: ImporterOutputFieldType,
    row: ImporterFormattedData
  ) => ImporterValidatorOutput;

  constructor(definition: CustomValidatorDefinition) {
    super(definition);

    this.key = definition.key;
    this.validateFn = definition.validateFn;
  }

  isValid(fieldValue: ImporterOutputFieldType, row: ImporterFormattedData) {
    const result = this.validateFn(fieldValue, row);
    const valid = !!!result;
    return {
      valid: valid,
      message: result?.message || this.definition.error,
      errorType: result?.errorType || this.key,
    };
  }
}

export class IntegerValidator extends Validator {
  isValid(fieldValue: ImporterOutputFieldType) {
    return {
      valid:
        !isNaN(fieldValue as unknown as number) &&
        fieldValue !== null &&
        fieldValue !== undefined,
      message: this.definition.error || 'This is not a valid number',
      errorType: 'is_integer',
    };
  }
}

export class UniqueValidator extends Validator {
  seen: {
    [key: string]: boolean;
  };

  constructor(definition: ImporterValidatorDefinitionBase) {
    super(definition);
    this.seen = {};
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    if (fieldValue in this.seen) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not unique',
        errorType: 'unique',
      };
    }
    this.seen[fieldValue] = true;
    return { valid: true };
  }
}

function escapeStringRegExp(str: string) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

export class RegexValidator extends Validator {
  regexp: RegExp;

  constructor(definition: RegexValidatorDefinition) {
    super(definition);
    if (typeof definition.regex === 'object') {
      this.regexp = definition.regex;
    } else {
      this.regexp = new RegExp(escapeStringRegExp(definition.regex));
    }
  }

  isValid(fieldValue: ImporterOutputFieldType) {
    const matches = this.regexp.test(fieldValue);
    if (!matches) {
      return {
        valid: false,
        message: this.definition.error || 'This value is invalid',
        errorType: 'regex',
      };
    }
    return { valid: true };
  }
}

export class RequiredValidator extends Validator {
  isValid(fieldValue: ImporterOutputFieldType) {
    if (!fieldValue) {
      return {
        valid: false,
        message: this.definition.error || 'This value is required',
        errorType: 'required',
      };
    }
    return { valid: true };
  }
}

export class ValidationResult {
  errorsByFieldKeyByRowIndex: {
    [key: string]: ValidationResultError;
  };

  constructor() {
    this.errorsByFieldKeyByRowIndex = {};
  }

  hasErrors() {
    return (
      Object.keys(this.errorsByFieldKeyByRowIndex).filter((fieldKey) => {
        return (
          Object.keys(this.errorsByFieldKeyByRowIndex[fieldKey]).length > 0
        );
      }).length > 0
    );
  }

  rowIndexesWithErrors(): Set<number | undefined> {
    let allRowIndexes: number[] = [];
    Object.keys(this.errorsByFieldKeyByRowIndex).forEach((fieldKey) => {
      const rowIndexes = Object.keys(this.errorsByFieldKeyByRowIndex[fieldKey]);
      allRowIndexes = allRowIndexes.concat(
        rowIndexes.map((r) => parseInt(r, 10))
      );
    });
    return new Set(allRowIndexes);
  }

  addError(
    fieldKey: string,
    rowIndex: number | string,
    error: ImporterValidatorOutput
  ) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    if (!(fieldKey in this.errorsByFieldKeyByRowIndex)) {
      this.errorsByFieldKeyByRowIndex[fieldKey] = {};
    }
    if (!(rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey])) {
      this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex] = [];
    }
    this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex].push(error);
  }

  hasError(fieldKey: string, rowIndex: number | string) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    return (
      fieldKey in this.errorsByFieldKeyByRowIndex &&
      rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey]
    );
  }

  getErrors(fieldKey: string, rowIndex: number | string) {
    fieldKey = fieldKey.toString();
    rowIndex = rowIndex.toString();
    return this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex];
  }
}

export const applyValidation = (
  formattedData: ImporterFormattedData[],
  fields: ImporterField[]
) => {
  const validatorsByFieldKey = eachWithObject<ImporterField, Validator[]>(
    fields,
    (field, obj) => {
      obj[field.key] = [];
      if (!field.validators) return;
      field.validators.forEach((validatorDefinition) => {
        obj[field.key].push(Validator.buildFromDefinition(validatorDefinition));
      });
    }
  );

  const validationResult = new ValidationResult();
  fields.forEach((field) => {
    formattedData.forEach((row, rowIndex) => {
      if (!hasData(row)) {
        return;
      }
      if (!(field.key in row) && !fieldIsRequired(field)) {
        return;
      }
      const value = row[field.key];
      const validators = validatorsByFieldKey[field.key];

      validators.forEach((v) => {
        const result = v.isValid(value, row);
        if (!result.valid) {
          validationResult.addError(field.key, rowIndex, result);
        }
      });
    });
  });
  return validationResult;
};

const computeStatisticsForField = (
  fieldKey: string,
  formattedData: ImporterFormattedData[],
  errorsByRowIndex: ValidationResultError
): ImporterFieldStatistic => {
  const errorTypeCounts: ImporterFieldStatisicErrorCount = { total: 0 };
  const counts = { isNull: 0 };
  formattedData.forEach((d) => {
    if (!d[fieldKey]) {
      counts.isNull += 1;
    }
  });

  Object.keys(errorsByRowIndex).forEach((rowIndex) => {
    const errors = errorsByRowIndex[rowIndex];
    if (errors && errors.length > 0) {
      errorTypeCounts.total += 1;
    }
    errors.forEach((error) => {
      const errorType = error.errorType;
      if (errorType != null) {
        if (errorType in errorTypeCounts) {
          errorTypeCounts[errorType] += 1;
        } else {
          errorTypeCounts[errorType] = 1;
        }
      }
    });
  });

  return { errorTypeCounts, counts };
};

export const computeStatistics = (
  formattedData: ImporterFormattedData[],
  headerMappings: ImporterHeaderMappings,
  validationResult: ValidationResult
): ImporterStatistics => {
  const statisticsByFieldKey: Record<string, ImporterFieldStatistic> = {};
  const headers = Object.keys(headerMappings).map((k) => headerMappings[k]);
  headers.forEach((headerMapping) => {
    if (!headerMapping.selectedField) {
      return;
    }
    const fieldKey = headerMapping.selectedField.value;
    statisticsByFieldKey[fieldKey] = computeStatisticsForField(
      fieldKey,
      formattedData,
      validationResult.errorsByFieldKeyByRowIndex[fieldKey] || {}
    );
  });

  return { statisticsByFieldKey, total: formattedData.length };
};

export class PostalCodeValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      validate: 'postal_code',
    });
  }
}

export class PhoneNumberValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: 'phone_number',
    });
  }
}

export class EmailValidator extends RegexValidator {
  constructor() {
    super({
      regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      validate: 'email',
    });
  }
}
