import { describe, expect, it } from 'vitest';
import { cases } from '@/data/cases';
import { ui } from '@/i18n/config';
import { blogPosts } from '@/data/blog';
import { galleryItems } from '@/data/gallery';

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

  it('uses published case asset paths in the homepage carousel', () => {
    const consumerArtwork = galleryItems.find((item) => item.id === 'otica-murano-2');

    expect(consumerArtwork?.src).toContain('/assets/cases/otica-murano/14-04-dia-do-consumidor');
    expect(galleryItems.every((item) => !item.src.includes('/assets/gallery-cases/'))).toBe(true);
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

  it('preserves the published QA and dashboard milestones', () => {
    const bySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

    expect(bySlug['qa-pos-deploy-dispositivo-real']?.dateISO).toBe('2026-08-07');
    expect(bySlug['dashboard-financeiro-em-construcao']?.dateISO).toBe('2026-08-10');
  });

  it('publishes the external pilot without claiming adoption', () => {
    const post = blogPosts.find((item) => item.slug === 'bancada-conteudo-piloto-externo');
    const serialized = JSON.stringify(post);

    expect(post?.dateISO).toBe('2026-08-10');
    expect(post?.images).toEqual([]);
    expect(post?.title.pt).toBeTruthy();
    expect(post?.title.en).toBeTruthy();
    expect(serialized).toContain('ainda não');
    expect(serialized).not.toMatch(/instalação concluída|adoção comprovada|recurring use confirmed/i);
  });

  it('publishes the PSD to After Effects research as pending execution', () => {
    const post = blogPosts.find((item) => item.slug === 'psd-after-effects-arquitetura');
    const serialized = JSON.stringify(post);

    expect(post?.dateISO).toBe('2026-08-21');
    expect(post?.images).toEqual([]);
    expect(post?.title.pt).toBeTruthy();
    expect(post?.title.en).toBeTruthy();
    expect(serialized).toMatch(/execução.*pendente|execution.*pending/i);
    expect(serialized).not.toMatch(/render validado|validated render|fluxo concluído|completed workflow/i);
  });

  it('keeps the new editorial updates free from private or synthetic proof', () => {
    const protectedSlugs = ['bancada-conteudo-piloto-externo', 'psd-after-effects-arquitetura'];
    const serialized = JSON.stringify(blogPosts.filter((post) => protectedSlugs.includes(post.slug)));

    expect(serialized).not.toContain('—');
    expect(serialized).not.toMatch(/R\$|@gmail|@hotmail|\+55|CPF|CNPJ|Banco Inter|PicPay|Mercado Pago/i);
  });
});
