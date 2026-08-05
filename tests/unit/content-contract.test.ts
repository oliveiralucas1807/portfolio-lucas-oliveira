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
    expect(ui.pt.projectsTitle).toBe('Projetos e campanhas.');
    expect(ui.pt.aboutText).toContain('Direção de Arte');
  });

  it('provides three opening artworks and complete galleries', () => {
    expect(cases.every((item) => item.featured.length === 3)).toBe(true);
    expect(cases.every((item) => item.images.length > 5)).toBe(true);
    expect(cases[0].featured.map((image) => image.src)).toEqual(expect.arrayContaining([
      expect.stringContaining('escalcao-campea'),
      expect.stringContaining('dia-do-trabalhador'),
      expect.stringContaining('esmeri'),
    ]));
  });

  it('provides enough source material for nineteen expanded artworks', () => {
    expect(cases.every((item) => item.images.slice(1).length === 19)).toBe(true);
  });

  it('uses the approved project, process and contact headings', () => {
    expect(ui.pt.projectsTitle).toBe('Projetos e campanhas.');
    expect(ui.pt.projectsIntro).toBe('');
    expect(ui.pt.deepTitle).toBe('Design, IA e processos em construção.');
    expect(ui.pt.contactTitle).toBe('Vamos conversar.');
    expect(cases[0].copy.summary.pt).toContain('Conjunto de campanhas promocionais');
  });

  it('curates the requested featured artworks', () => {
    const byId = Object.fromEntries(cases.map((item) => [item.id, item]));
    expect(byId.coimbra.featured.map((image) => image.src).join(' ')).toMatch(/escalcao-campea.*dia-do-trabalhador.*esmeri/);
    expect(byId['cultura-inglesa'].featured.map((image) => image.src).join(' ')).toMatch(/st-patrick.*pascoa.*dica-de-ingles/);
    expect(byId['otica-murano'].featured.map((image) => image.src).join(' ')).toMatch(/mes-da-maes.*diabo-veste-prato.*dia-dos-namorados/);
  });
});
