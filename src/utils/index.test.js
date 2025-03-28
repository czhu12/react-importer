import { formatData, filterEmptyRows, normalizeValue } from './';
import { describe, it, expect } from 'vitest';

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

describe('filterEmptyRows', () => {
  it('it filters out empty rows', () => {
    expect(
      filterEmptyRows({
        rows: [{ key: 'hello' }, {}, {}],
      }).length
    ).toEqual(1);
    expect(filterEmptyRows({ rows: [{}, {}, {}] }).length).toEqual(0);
    expect(filterEmptyRows({ rows: [] }).length).toEqual(0);
  });
});


describe('normalizeValue', () => {
  it('normalizes a value', () => {
    expect(normalizeValue('patient.data-SEX_AT_BIRTH')).toEqual('patientdatasexatbirth');
  });
});

