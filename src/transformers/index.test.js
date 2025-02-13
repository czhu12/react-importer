import { applyTransformations, Pipeline } from './';
import {
  PhoneNumberTransformer,
  StateCodeTransformer,
  PostalCodeTransformer,
  CustomTransformer,
  StripTransformer,
} from './transformer_definitions';
import { describe, it, expect } from 'vitest';

describe('Pipeline', () => {
  it('can run a series of transformations', () => {
    const pipeline = new Pipeline();
    pipeline.push(new PhoneNumberTransformer());
    expect(pipeline.transform('555-555-5555')).toEqual('5555555555');
  });
});

describe('applyTransformations', () => {
  it('can apply transformations', () => {
    const sheetDefinitions = [
      {
        id: 'a',
        label: 'Sheet A',
        columns: [
          {
            type: 'string',
            label: 'Phone Number',
            id: 'phone_number',
            transformers: [{ transformer: 'phone_number' }],
          },
        ],
      },
    ];

    const data = applyTransformations(sheetDefinitions, [
      { sheetId: 'a', rows: [{ phone_number: '555-555-5555' }] },
    ]);

    expect(data[0].rows[0].phone_number).toEqual('5555555555');
  });
});

describe('CustomTransformer', () => {
  it('can apply transformations', () => {
    const transformer = new CustomTransformer({
      key: 'add_one',
      transformFn: (item) => item + 1,
    });

    expect(transformer.transform(1)).toEqual(2);
  });
});

describe('StripTransformer', () => {
  it('can apply transformations', () => {
    const transformer = new StripTransformer();

    expect(transformer.transform(' a ')).toEqual('a');
  });
});

describe('PhoneNumberTransformer', () => {
  it('corrects phone number', () => {
    const transformer = new PhoneNumberTransformer();
    expect(transformer.transform('555-555-5555')).toEqual('5555555555');
    expect(transformer.transform('5555555555')).toEqual('5555555555');
  });
});

describe('StateCodeTransformer', () => {
  it('re-maps state code', () => {
    const transformer = new StateCodeTransformer();
    expect(transformer.transform('california')).toEqual('CA');
    expect(transformer.transform('California')).toEqual('CA');
  });
});

describe('PostalCodeTransformer', () => {
  it('corrects hyphenated postal codes', () => {
    const transformer = new PostalCodeTransformer();
    expect(transformer.transform('12345-6789')).toEqual('12345');
    expect(transformer.transform('12345')).toEqual('12345');
  });
});
