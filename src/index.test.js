import Importer from '.';
import { describe, it, expect, vi } from 'vitest';

vi.mock('dropzone', () => ({
  default: vi.fn(), // Dropzone.js requires browser environment, so we mock it here
}));

describe('Importer', () => {
  it('is truthy', () => {
    expect(Importer).toBeTruthy();
  });
});
