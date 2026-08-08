import { describe, expect, it } from 'vitest';
import { cases } from '@/data/cases';
import { ui } from '@/i18n/config';
import { blogPosts } from '@/data/blog';

describe('case content', () => {
  it('preserves six bilingual projects', () => {
    expect(cases).toHaveLength(6);
    expect(cases.every((item) => item.copy.title.pt && item.copy.title.en)).toBe(true);
    expect(cases.map((item) => item.order)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('uses direct copy without editorial em dashes', () => {
    const visibleCopy = JSON.stringify(ui);
    expect(visibleCopy).not.toContain('—');
    expect(ui.pt.projectsEyebrow).toBe('Cases');
    expect(ui.pt.projectsTitle).toBe('Projetos e campanhas');
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
    expect(cases.every((item) => item.gallery.length === 19)).toBe(true);
  });

  it('keeps every featured artwork out of its expanded gallery', () => {
    for (const item of cases) {
      const featuredSources = new Set(item.featured.map((image) => image.src));
      const gallerySources = item.gallery.map((image) => image.src);

      expect(gallerySources.some((src) => featuredSources.has(src)), item.client).toBe(false);
      expect(new Set(gallerySources).size, item.client).toBe(gallerySources.length);
    }
  });

  it('uses the approved project, process and contact headings', () => {
    expect(ui.pt.projectsTitle).toBe('Projetos e campanhas');
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
    expect(byId['otica-murano'].images.slice(1, 5).map((image) => image.campaign)).toEqual([
      '04 Dia do Consumidor',
      '02 CUIDADOS',
      '09 Diabo veste prato',
      '06 ABRIL MARROMM',
    ]);
    expect(byId['otica-murano'].images.filter((image) => image.campaign === '09 Diabo veste prato')).toHaveLength(2);
    expect(byId['otica-murano'].images.map((image) => image.campaign)).toEqual(expect.arrayContaining([
      'Black das Black',
      'Aniversário de Manaus',
    ]));
    expect(byId['otica-murano'].gallery).toHaveLength(19);
    expect(byId['otica-murano'].gallery.map((image) => image.src)).not.toContain(byId['otica-murano'].featured[1].src);
    expect(byId['otica-murano'].gallery.map((image) => image.campaign)).toContain('Tratamentos para lentes');
  });
});

describe('editorial timeline', () => {
  it('uses sourced milestones instead of provisional posts', () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(6);
    expect(blogPosts.every((post) => post.status === 'published')).toBe(true);
    expect(blogPosts.every((post) => post.sourceRef.length > 0)).toBe(true);
    expect(blogPosts.every((post) => /^\d{4}-\d{2}-\d{2}$/.test(post.dateISO))).toBe(true);
    expect(blogPosts.every((post) => post.topics.length > 0)).toBe(true);
    expect(blogPosts.every((post) => post.images.length <= 6)).toBe(true);
    expect(JSON.stringify(blogPosts)).not.toContain('EM BREVE');
  });

  it('uses only article-specific evidence in the editorial timeline', () => {
    const genericArtwork = /foto-lucas-desktop|mivybook-destaque|assets\/cases\//;

    for (const post of blogPosts) {
      expect(post.images.length, post.slug).toBeLessThanOrEqual(6);
      for (const image of post.images) {
        expect(image.src, post.slug).toContain(`/assets/blog/${post.slug}/`);
        expect(image.src, post.slug).not.toMatch(genericArtwork);
        expect(image.alt.pt.trim().length, post.slug).toBeGreaterThan(0);
        expect(image.alt.en.trim().length, post.slug).toBeGreaterThan(0);
      }
    }
  });
});
