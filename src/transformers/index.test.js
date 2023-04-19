import {
  applyTransformations,
  PhoneNumberTransformer,
  StateCodeTransformer,
  PostalCodeTransformer
} from './'

describe('applyTransformations', () => {})

describe('PhoneNumberTransformer', () => {
  it('corrects phone number', () => {
    const transformer = new PhoneNumberTransformer()
    expect(transformer.format('555-555-5555')).toEqual('5555555555')
    expect(transformer.format('5555555555')).toEqual('5555555555')
  })
})

describe('StateCodeTransformer', () => {
  it('re-maps state code', () => {
    const transformer = new StateCodeTransformer()
    expect(transformer.format('california')).toEqual('CA')
    expect(transformer.format('California')).toEqual('CA')
  })
})

describe('PostalCodeTransformer', () => {
  it('corrects hyphenated postal codes', () => {
    const transformer = new PostalCodeTransformer()
    expect(transformer.format('12345-6789')).toEqual('12345')
    expect(transformer.format('12345')).toEqual('12345')
  })
})
