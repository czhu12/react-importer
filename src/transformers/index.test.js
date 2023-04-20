import {
  Pipeline,
  applyTransformations,
  PhoneNumberTransformer,
  StateCodeTransformer,
  PostalCodeTransformer
} from './'

const fields = [
  {
    label: 'Phone Number',
    key: 'phone_number',
    transformers: [{ transformer: 'phone_number' }]
  }
]
describe('Pipeline', () => {
  it('can run a series of transformations', () => {
    const pipeline = new Pipeline()
    pipeline.push(new PhoneNumberTransformer())
    expect(pipeline.transform('555-555-5555')).toEqual('5555555555')
  })
})

describe('applyTransformations', () => {
  it('can apply transformations', () => {
    const data = applyTransformations(
      [{ phone_number: '555-555-5555' }],
      fields
    )
    expect(data[0].phone_number).toEqual('5555555555')
  })
})

describe('PhoneNumberTransformer', () => {
  it('corrects phone number', () => {
    const transformer = new PhoneNumberTransformer()
    expect(transformer.transform('555-555-5555')).toEqual('5555555555')
    expect(transformer.transform('5555555555')).toEqual('5555555555')
  })
})

describe('StateCodeTransformer', () => {
  it('re-maps state code', () => {
    const transformer = new StateCodeTransformer()
    expect(transformer.transform('california')).toEqual('CA')
    expect(transformer.transform('California')).toEqual('CA')
  })
})

describe('PostalCodeTransformer', () => {
  it('corrects hyphenated postal codes', () => {
    const transformer = new PostalCodeTransformer()
    expect(transformer.transform('12345-6789')).toEqual('12345')
    expect(transformer.transform('12345')).toEqual('12345')
  })
})
