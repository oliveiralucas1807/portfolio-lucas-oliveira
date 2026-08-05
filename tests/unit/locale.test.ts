import { describe, expect, it } from 'vitest';
import { localePath } from '@/i18n/config';

describe('locale routes', () => {
  it('maps stable bilingual routes', () => {
    expect(localePath('pt', 'home')).toBe('/');
    expect(localePath('en', 'lab')).toBe('/en/lab/');
  });
});
