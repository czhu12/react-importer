import { formatData } from '../utils'
import {
  Validator,
  RegexValidator,
  applyValidation,
  computeStatistics,
  ValidationResult
} from './'

describe('Validator.buildFromDefinition', () => {
  it('creates the correct validator', () => {
    const validator = Validator.buildFromDefinition({
      validate: 'regex_matches',
      regex: '^(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})$',
      error: 'Must be a valid email'
    })
    expect(validator instanceof RegexValidator).toEqual(true)
    expect(validator.definition.error).toEqual('Must be a valid email')
  })
})

describe('UniqueValidator', () => {
  it('validates uniqueness', () => {
    const validator = Validator.buildFromDefinition({ validate: 'unique' })
    expect(validator.isValid(1).valid).toEqual(true)
    expect(validator.isValid(2).valid).toEqual(true)
    expect(validator.isValid(1).valid).toEqual(false)
  })
})

describe('RequiredValidator', () => {
  it('validates required', () => {
    const validator = Validator.buildFromDefinition({ validate: 'required' })
    expect(validator.isValid(1).valid).toEqual(true)
    expect(validator.isValid('2').valid).toEqual(true)
    expect(validator.isValid(null).valid).toEqual(false)
  })
})

describe('IntegerValidator', () => {
  it('validates integer', () => {
    const validator = Validator.buildFromDefinition({ validate: 'is_integer' })
    expect(validator.isValid(0).valid).toEqual(true)
    expect(validator.isValid(1).valid).toEqual(true)
    expect(validator.isValid('2').valid).toEqual(true)
    expect(validator.isValid(null).valid).toEqual(false)
    expect(validator.isValid('hello').valid).toEqual(false)
  })
})

describe('ValidationResult', () => {
  const validationResult = new ValidationResult()
  it('can add errors', () => {
    validationResult.addError('name', 2, { message: 'whoops!' })
    expect(validationResult.hasError('name', 2)).toEqual(true)
    expect(validationResult.hasError('name', 1)).toEqual(false)
    expect(validationResult.getErrors('name', 2)[0].message).toEqual('whoops!')
  })

  it('knows if there are any errors', () => {
    const validationResult = new ValidationResult()
    expect(validationResult.hasErrors()).toEqual(false)
    validationResult.addError('name', 2, { message: 'whoops!' })
    expect(validationResult.hasErrors()).toEqual(true)
  })

  it('can return rows with errors', () => {
    validationResult.addError('name', 1, { message: 'whoops!' })
    validationResult.addError('name', 2, { message: 'whoops!' })
    validationResult.addError('name', 2, { message: 'whoops 2!' })
    validationResult.addError('name', 3, { message: 'whoops!' })
    expect([...validationResult.rowIndexesWithErrors()].sort()).toEqual([
      1, 2, 3
    ])
  })
})

describe('applyValidation', () => {
  const headerMappings = {
    0: {
      columnIndex: 0,
      selectedField: { value: 'name' },
      name: 'Name'
    },
    1: {
      columnIndex: 1,
      selectedField: { value: 'email' },
      name: 'Email'
    },
    2: {
      columnIndex: 2,
      selectedField: { value: 'phone_number' },
      name: 'Phone Number'
    }
  }

  const fields = [
    { label: 'Full Name', key: 'name', validators: [{ validate: 'required' }] },
    {
      label: 'Email',
      key: 'email',
      validators: [
        {
          validate: 'regex_matches',
          regex:
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          error: 'Must be a valid email'
        },
        { validate: 'required' },
        { validate: 'unique' }
      ]
    },
    {
      label: 'Phone Number',
      key: 'phone_number',
      validators: [{ validate: 'unique' }]
    }
  ]

  const data = [
    ['Name', 'Email', 'Phone Number'], // Headers
    ['chris', 'chris@example.com', '555-555-5555'], // This row is fine
    ['chris', 'chris@example.com', '555-555-5555'], // This phone number, email is not unique
    [null, 'c.com', '556-555-5555'] // This email doesn't match regex, name is null
  ]

  describe('computeStatistics', () => {
    const formattedData = formatData(headerMappings, data)
    const validationResult = applyValidation(formattedData, fields)
    const statistics = computeStatistics(
      formattedData,
      headerMappings,
      validationResult
    )
    expect(statistics.total).toEqual(3)
    expect(statistics.statisticsByFieldKey.name.counts.isNull).toEqual(1)
    expect(statistics.statisticsByFieldKey.email.counts.isNull).toEqual(0)
    expect(statistics.statisticsByFieldKey.phone_number.counts.isNull).toEqual(
      0
    )
  })

  it('runs validations correctly', () => {
    const formattedData = formatData(headerMappings, data)
    const validationResult = applyValidation(formattedData, fields)

    expect(validationResult.hasError('name', 0)).toEqual(false)
    expect(validationResult.hasError('name', 1)).toEqual(false)
    expect(validationResult.hasError('name', 2)).toEqual(true)

    expect(validationResult.hasError('email', 0)).toEqual(false)
    expect(validationResult.hasError('email', 1)).toEqual(true)
    expect(validationResult.hasError('email', 2)).toEqual(true)

    expect(validationResult.hasError('phone_number', 0)).toEqual(false)
    expect(validationResult.hasError('phone_number', 1)).toEqual(true)
    expect(validationResult.hasError('phone_number', 2)).toEqual(false)
  })
})
