import { describe, expect, it } from 'vitest';
import { cases } from '@/data/cases';
import { ui } from '@/i18n/config';

describe('case content', () => {
  it('preserves six bilingual projects', () => {
    expect(cases).toHaveLength(6);
    expect(cases.every((item) => item.copy.title.pt && item.copy.title.en)).toBe(true);
    expect(cases.map((item) => item.order)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('uses direct copy without editorial em dashes', () => {
    const visibleCopy = JSON.stringify(ui);
    expect(visibleCopy).not.toContain('—');
    expect(ui.pt.projectsTitle).toBe('Campanhas e soluções visuais para marcas em movimento.');
    expect(ui.pt.aboutText).toContain('Direção de Arte');
  });

  it('provides three opening artworks and complete galleries', () => {
    expect(cases.every((item) => item.featured.length === 3)).toBe(true);
    expect(cases.every((item) => item.images.length > 5)).toBe(true);
    expect(cases[0].featured.map((image) => image.src)).toEqual(expect.arrayContaining([
      expect.stringContaining('escalcao-campea'),
      expect.stringContaining('mega-mes-do-trabalhador'),
      expect.stringContaining('mes-do-serralheiro'),
    ]));
  });
});
