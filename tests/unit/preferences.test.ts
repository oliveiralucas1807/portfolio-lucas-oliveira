import { describe, expect, it } from 'vitest';
import { resolveTheme } from '@/lib/preferences';

describe('theme preference', () => {
  it('uses saved choice before system preference', () => {
    expect(resolveTheme('dark', false)).toBe('dark');
    expect(resolveTheme(null, true)).toBe('dark');
    expect(resolveTheme(null, false)).toBe('light');
  });
});
