import { fieldIsRequired } from '../utils'
import { eachWithObject } from '../utils/functional'

export class Validator {
  constructor(definition) {
    this.definition = definition
  }

  isValid(fieldValue, row) {
    throw new Error('Not Implemented')
  }

  static buildFromDefinition(definition) {
    const mapping = {
      regex_matches: RegexValidator,
      required: RequiredValidator,
      unique: UniqueValidator,
      is_integer: IntegerValidator
    }
    if (!(definition.validate in mapping)) {
      throw new Error(`Missing validator for ${definition.validate}`)
    }
    const FoundValidator = mapping[definition.validate]
    return new FoundValidator(definition)
  }
}

export class IntegerValidator extends Validator {
  isValid(fieldValue) {
    return {
      valid:
        !isNaN(fieldValue) && fieldValue !== null && fieldValue !== undefined,
      message: this.definition.error || 'This is not a valid number',
      errorType: 'is_integer'
    }
  }
}

export class UniqueValidator extends Validator {
  constructor(definition) {
    super(definition)
    this.seen = {}
  }

  isValid(fieldValue) {
    if (fieldValue in this.seen) {
      return {
        valid: false,
        message: this.definition.error || 'This value is not unique',
        errorType: 'unique'
      }
    }
    this.seen[fieldValue] = true
    return { valid: true }
  }
}

function escapeStringRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
}

export class RegexValidator extends Validator {
  constructor(definition) {
    super(definition)
    if (typeof this.definition.regex === 'object') {
      this.regexp = this.definition.regex
    } else {
      this.regexp = new RegExp(escapeStringRegExp(this.definition.regex))
    }
    this.seen = {}
  }

  isValid(fieldValue) {
    const matches = this.regexp.test(fieldValue)
    if (!matches) {
      return {
        valid: false,
        message: 'This value is invalid' || this.definition.error,
        errorType: 'regex'
      }
    }
    return { valid: true }
  }
}

export class RequiredValidator extends Validator {
  isValid(fieldValue) {
    if (!fieldValue) {
      return {
        valid: false,
        message: this.definition.error || 'This value is required',
        errorType: 'required'
      }
    }
    return { valid: true }
  }
}

export class ValidationResult {
  constructor() {
    this.errorsByFieldKeyByRowIndex = {}
  }

  hasErrors() {
    return (
      Object.keys(this.errorsByFieldKeyByRowIndex).filter((fieldKey) => {
        return Object.keys(this.errorsByFieldKeyByRowIndex[fieldKey]).length > 0
      }).length > 0
    )
  }

  rowIndexesWithErrors() {
    let allRowIndexes = []
    Object.keys(this.errorsByFieldKeyByRowIndex).forEach((fieldKey) => {
      const rowIndexes = Object.keys(this.errorsByFieldKeyByRowIndex[fieldKey])
      allRowIndexes = allRowIndexes.concat(
        rowIndexes.map((r) => parseInt(r, 10))
      )
    })
    return new Set(allRowIndexes)
  }

  addError(fieldKey, rowIndex, error) {
    fieldKey = fieldKey.toString()
    rowIndex = rowIndex.toString()
    if (!(fieldKey in this.errorsByFieldKeyByRowIndex)) {
      this.errorsByFieldKeyByRowIndex[fieldKey] = {}
    }
    if (!(rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey])) {
      this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex] = []
    }
    this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex].push(error)
  }

  hasError(fieldKey, rowIndex) {
    fieldKey = fieldKey.toString()
    rowIndex = rowIndex.toString()
    return (
      fieldKey in this.errorsByFieldKeyByRowIndex &&
      rowIndex in this.errorsByFieldKeyByRowIndex[fieldKey]
    )
  }

  getErrors(fieldKey, rowIndex) {
    fieldKey = fieldKey.toString()
    rowIndex = rowIndex.toString()
    return this.errorsByFieldKeyByRowIndex[fieldKey][rowIndex]
  }
}

const hasData = (row) => {
  const data = { ...row }
  delete data.rowIndex
  const values = Object.values(data)
  return values.length > 0
}

export const applyValidation = (formattedData, fields) => {
  const validatorsByFieldKey = eachWithObject(fields, (field, obj) => {
    obj[field.key] = []
    if (!field.validators) return
    field.validators.forEach((validatorDefinition) => {
      obj[field.key].push(Validator.buildFromDefinition(validatorDefinition))
    })
  })

  const validationResult = new ValidationResult()
  fields.forEach((field) => {
    formattedData.forEach((row, rowIndex) => {
      if (!hasData(row)) {
        return
      }
      if (!(field.key in row) && !fieldIsRequired(field)) {
        return
      }
      const value = row[field.key]
      const validators = validatorsByFieldKey[field.key]

      validators.forEach((v) => {
        const result = v.isValid(value)
        if (!result.valid) {
          validationResult.addError(field.key, rowIndex, result)
        }
      })
    })
  })
  return validationResult
}

const computeStatisticsForField = (
  fieldKey,
  formattedData,
  errorsByRowIndex
) => {
  const errorTypeCounts = { total: 0 }
  const counts = { isNull: 0 }
  formattedData.forEach((d) => {
    if (!d[fieldKey]) {
      counts.isNull += 1
    }
  })

  Object.keys(errorsByRowIndex).forEach((rowIndex) => {
    const errors = errorsByRowIndex[rowIndex]
    if (errors && errors.length > 0) {
      errorTypeCounts.total += 1
    }
    errors.forEach((error) => {
      if (error.errorType in errorTypeCounts) {
        errorTypeCounts[error.errorType] += 1
      } else {
        errorTypeCounts[error.errorType] = 1
      }
    })
  })
  return { errorTypeCounts, counts }
}

export const computeStatistics = (
  formattedData,
  headerMappings,
  validationResult
) => {
  const statisticsByFieldKey = {}
  const headers = Object.keys(headerMappings).map((k) => headerMappings[k])
  headers.forEach((headerMapping) => {
    if (!headerMapping.selectedField) {
      return
    }
    const fieldKey = headerMapping.selectedField.value
    statisticsByFieldKey[fieldKey] = computeStatisticsForField(
      fieldKey,
      formattedData,
      validationResult.errorsByFieldKeyByRowIndex[fieldKey] || {}
    )
  })
  return { statisticsByFieldKey, total: formattedData.length }
}

export class PostalCodeValidator extends Validator {
  constructor() {
    super({ regex: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/ })
  }
}

export class PhoneNumberValidator extends Validator {
  constructor() {
    super({ regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })
  }
}

export class EmailValidator extends RegexValidator {
  constructor() {
    super({ regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })
  }
}
