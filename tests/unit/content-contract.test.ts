import { describe, expect, it } from 'vitest';
import { cases } from '@/data/cases';

describe('case content', () => {
  it('preserves six bilingual projects', () => {
    expect(cases).toHaveLength(6);
    expect(cases.every((item) => item.copy.title.pt && item.copy.title.en)).toBe(true);
    expect(cases.map((item) => item.order)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
