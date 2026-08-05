import { describe, expect, it } from 'vitest';
import { galleryItems } from '@/data/gallery';

describe('kinetic gallery', () => {
  it('mixes case images with external client work', () => {
    expect(galleryItems).toHaveLength(26);
    expect(new Set(galleryItems.map((item) => item.client)).size).toBe(20);
  });
});
