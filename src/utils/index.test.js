import {
  formatData,
  buildSuggestedHeaderMappings,
  filterEmptyRows,
  filterInvalidRows,
  fieldIsRequired,
} from './';
import { ValidationResult } from '../validators';
const fields = [
  { label: 'Full Name', key: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Phone Number', key: 'phone_number' },
];
const headerMappings = {
  0: {
    columnIndex: 0,
    selectedField: { value: 'name' },
    name: 'Name',
    confirmed: true,
  },
  1: {
    columnIndex: 1,
    selectedField: { value: 'email' },
    name: 'Email',
    confirmed: true,
  },
  2: {
    columnIndex: 2,
    selectedField: { value: 'phone_number' },
    name: 'Phone Number',
    confirmed: false,
  },
};

const data = [
  ['Name', 'Email', 'Phone Number'], // Headers
  ['chris', 'chris@example.com', '555-555-5555'], // This row is fine
  ['jason', 'jason@gmail.com', '555-555-5556'][ // This row is fine
    ('mike', 'mike@gmail.com', undefined)
  ], // This row is fine
];

describe('formatData', () => {
  it.skip('creates data for aggrid', () => {
    const output = formatData(headerMappings, data);

    expect(output[0].name).toEqual('chris');
    expect(output[0].email).toEqual('chris@example.com');
    expect(output[0].phone_number).toEqual('555-555-5555');

    expect(output[1].name).toEqual('jason');
    expect(output[1].email).toEqual('jason@gmail.com');
    expect(output[1].phone_number).toEqual('555-555-5556');

    expect(output[2].name).toEqual('mike');
    expect(output[2].email).toEqual('mike@gmail.com');
    expect(output[2].phone_number).toEqual(undefined);
  });
});

describe('buildSuggestedHeaderMappings', () => {
  it('creates suggested header mappings', () => {
    const suggestedHeaderMappings = buildSuggestedHeaderMappings(
      fields,
      data[0]
    );
    const phoneNumberMapping = Object.values(suggestedHeaderMappings).find(
      (headerMapping) => headerMapping.name === 'Phone Number'
    );
    expect(phoneNumberMapping.selectedField.value).toEqual('phone_number');

    const emailMapping = Object.values(suggestedHeaderMappings).find(
      (headerMapping) => headerMapping.name === 'Email'
    );
    expect(emailMapping.selectedField.value).toEqual('email');

    const nameMapping = Object.values(suggestedHeaderMappings).find(
      (headerMapping) => headerMapping.name === 'Name'
    );
    expect(nameMapping.selectedField.value).toEqual('name');
  });
});

describe('filterEmptyRows', () => {
  it('it filters out empty rows', () => {
    expect(
      filterEmptyRows([
        { rowIndex: 0, key: 'hello' },
        { rowIndex: 1 },
        { rowIndex: 2 },
      ]).length
    ).toEqual(1);
    expect(
      filterEmptyRows([{ rowIndex: 0 }, { rowIndex: 1 }, { rowIndex: 2 }])
        .length
    ).toEqual(0);
    expect(filterEmptyRows([]).length).toEqual(0);
  });
});

describe('filterInvalidRows', () => {
  it('it filters out invalid rows', () => {
    const validationResult = new ValidationResult();
    validationResult.addError('email', 0, {});
    expect(
      filterInvalidRows(
        [
          { rowIndex: 0, email: 'hello' }, // This row is invalid
          { rowIndex: 1 },
          { rowIndex: 2 },
        ],
        validationResult
      ).length
    ).toEqual(0);
  });
});

describe('buildFinalData', () => {
  it('it builds a final set of data that filters out invalid and empty rows', () => {
    const validationResult = new ValidationResult();
    validationResult.addError('email', 0, {});
    expect(
      filterInvalidRows(
        [
          { rowIndex: 0, email: 'hello' }, // This row is invalid
          { rowIndex: 1, email: 'chris@example.com' }, // This row is invalid
          { rowIndex: 2 },
          { rowIndex: 3 },
        ],
        validationResult
      ).length
    ).toEqual(1);
  });
});

describe('fieldIsRequired', () => {
  it('returns true if field is required', () => {
    const field = {
      label: 'Test Group ID',
      key: 'test_group_id',
      validators: [{ validate: 'required' }, { validate: 'unique' }],
    };
    expect(fieldIsRequired(field)).toEqual(true);
  });

  it('returns true if field has no validators', () => {
    const field = { label: 'Test Group ID', key: 'test_group_id' };
    expect(fieldIsRequired(field)).toEqual(false);
  });

  it('returns true if field has empty validators', () => {
    const field = {
      label: 'Test Group ID',
      key: 'test_group_id',
      validators: [],
    };
    expect(fieldIsRequired(field)).toEqual(false);
  });
});
