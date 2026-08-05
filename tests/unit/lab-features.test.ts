import { describe, expect, it } from 'vitest';
import { labFeatures } from '@/data/labFeatures';

describe('laboratory registry', () => {
  it('documents all approved experiments bilingually', () => {
    expect(labFeatures.map((item) => item.id)).toEqual(['dark-mode', 'cursor', 'spotify', 'blog', 'newsletter', 'cms', 'resend', 'three-d', 'filters', 'carousel-variants', 'parallax']);
    expect(labFeatures.every((item) => item.title.pt && item.title.en)).toBe(true);
  });
});
