import { buildSuggestedHeaderMappings } from './utils';
import { describe, it, expect } from 'vitest';

const sheets = [
  {
    columns: [
      { label: 'Full Name', id: 'name' },
      { label: 'Email', id: 'email' },
      { label: 'Phone Number', id: 'phone_number' },
    ],
  },
];

describe('buildSuggestedHeaderMappings', () => {
  it('creates suggested header mappings', () => {
    const suggestedHeaderMappings = buildSuggestedHeaderMappings(sheets, [
      'Name',
      'Email',
      'Phone Number',
    ]);
    const phoneNumberMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Phone Number'
    );
    expect(phoneNumberMapping.sheetColumnId).toEqual('phone_number');

    const emailMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Email'
    );
    expect(emailMapping.sheetColumnId).toEqual('email');

    const nameMapping = suggestedHeaderMappings.find(
      (headerMapping) => headerMapping.csvColumnName === 'Name'
    );
    expect(nameMapping.sheetColumnId).toEqual('name');
  });
});
