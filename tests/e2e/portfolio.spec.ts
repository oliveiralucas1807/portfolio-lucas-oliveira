import { expect, test } from '@playwright/test';

test('Portuguese home has the complete V2 structure', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Lucas Oliveira');
  await expect(page.locator('.brand')).toContainText('LOS');
  await expect(page.locator('.kinetic-shell')).toHaveCount(1);
  await expect(page.locator('.marquee-row')).toHaveCount(2);
  expect(await page.locator('.marquee-track figure').count()).toBeGreaterThanOrEqual(52);
  await expect(page.locator('.project')).toHaveCount(6);
  await expect(page.locator('.project-featured')).toHaveCount(6);
  await expect(page.locator('.project-featured').first().locator('img')).toHaveCount(3);
  await expect(page.locator('.projects-intro')).toContainText('Cases');
  await expect(page.locator('.projects-intro')).toContainText('Projetos e campanhas');
  await expect(page.locator('.project').first().locator('.project-featured img').nth(1)).toHaveAttribute('src', /dia-do-trabalhador/);
  await expect(page.locator('.project').first().locator('.project-featured img').nth(2)).toHaveAttribute('src', /esmeri/);
  await expect(page.locator('.project-expand-cta').first()).toBeVisible();
  await expect(page.locator('.future-card')).toContainText('Mais cases em breve');
  await expect(page.locator('.future-card')).not.toContainText('A estrutura está pronta');
  await expect(page.locator('body')).not.toContainText('Portfólio light para processos seletivos');
  await expect(page.locator('body')).not.toContainText('Cases selecionados');
  await expect(page.locator('.blog-link')).toHaveAttribute('href', '/blog/');
  await expect(page.locator('.blog-link')).toHaveText('O que há de novo');
  await expect(page.locator('.blog-link')).toHaveAttribute('data-parallax', '');
  await expect(page.locator('.topbar-links a').first()).toHaveCSS('text-transform', 'uppercase');
  await expect(page.locator('.locale-chip img')).toHaveAttribute('src', '/assets/icons/idioma-estados-unidos.svg');
  await expect(page.locator('.hero-kicker')).toHaveText('Manaus · Brasil · Desde 2019');
  await expect(page.locator('.topbar')).not.toContainText('Contato');
  await expect(page.locator('.topbar')).not.toContainText('Laboratório');
  await expect(page.locator('.hero-art img')).toHaveAttribute('src', '/assets/hero/foto-lucas-desktop.webp');
});

test('English home is complete and switchable', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.project')).toHaveCount(6);
  await expect(page.getByText('Ver portfólio em português')).toBeVisible();
  await expect(page.locator('.hero-kicker')).toHaveText('Manaus · Brazil · Since 2019');
  await expect(page.locator('.locale-chip img')).toHaveAttribute('src', '/assets/icons/idioma-brasil.svg');
});

test('theme persists and blog is localized', async ({ page }) => {
  await page.goto('/blog/');
  await expect(page.locator('.locale-chip img')).toHaveAttribute('src', '/assets/icons/idioma-estados-unidos.svg');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('O que está acontecendo agora.');
  await expect(page.locator('.blog-post')).toHaveCount(3);
  const firstUpdate = page.locator('.blog-post-details').first();
  await firstUpdate.locator('summary').click();
  await expect(firstUpdate.locator('.blog-article-copy p')).toHaveCount(2);
  await expect(firstUpdate.locator('.blog-article-images img')).toHaveCount(2);
  await page.getByRole('button', { name: 'Alternar tema' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.goto('/en/blog/');
  await expect(page.locator('.locale-chip img')).toHaveAttribute('src', '/assets/icons/idioma-brasil.svg');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('What is happening now.');
});

test('contact opens a centered accessible modal', async ({ page }) => {
  await page.goto('/');
  const contactTrigger = page.getByRole('button', { name: 'Entrar em contato' });
  await expect(page.locator('.portfolio-modal')).toHaveAttribute('data-ready', 'true');
  await contactTrigger.click();
  const contactDialog = page.getByRole('dialog', { name: 'Opções de contato' });
  await expect(contactDialog).toBeVisible();
  const dialogBox = await contactDialog.boundingBox();
  const viewport = page.viewportSize();
  expect(dialogBox && viewport && Math.abs(dialogBox.x + dialogBox.width / 2 - viewport.width / 2)).toBeLessThan(8);
  await expect(contactDialog.locator('svg')).toHaveCount(4);
  await expect(contactDialog.locator('[data-icon-source="lucas-email"]')).toHaveCount(1);
  await expect(contactDialog.locator('[data-icon-source="lucas-whatsapp"]')).toHaveCount(1);
  await expect(contactDialog.locator('.modal-links a').nth(2).locator('svg')).toHaveAttribute('fill', 'currentColor');
  await page.keyboard.press('Escape');
  await expect(contactDialog).toBeHidden();
  await expect(contactTrigger).toBeFocused();

});

test('about and prepared ambient player expose the revised assets', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.about-portrait img')).toBeVisible();
  await expect(page.locator('.skill-chip')).toHaveCount(6);
  await expect(page.locator('.skill-chip .ui-icon')).toHaveCount(6);
  await expect(page.locator('.about-portrait img')).toHaveAttribute('src', '/assets/about/lucas-oliveira-retrato.webp');
  const player = page.locator('[data-audio-player]');
  await expect(player).toHaveAttribute('data-ready', 'true');
  await expect(player).toBeVisible();
  await expect(player).toHaveAttribute('data-initial-volume', '0.18');
  await expect(player).toContainText('Playlist do Lucas');
  await expect(player).not.toContainText('preparação');
  await expect(player.locator('iframe')).toHaveCount(0);
  await expect(player.getByRole('button', { name: 'Reproduzir' })).toBeDisabled();
  await expect(player.getByRole('link', { name: 'Abrir playlist no Spotify' })).toHaveAttribute('href', /2OfZT7teUPaGjHWRgGqMta/);
  await expect(player.getByRole('button', { name: 'Fechar player' })).toBeVisible();
  await player.getByRole('button', { name: 'Fechar player' }).click();
  await expect(player).toBeHidden();
  await page.reload();
  await expect(player).toBeHidden();
});

test('expanded projects reveal a complete five-row gallery', async ({ page }) => {
  await page.goto('/');
  const first = page.locator('.project-more').first();
  await first.locator('summary').click();
  await expect(first.locator('.project-gallery img')).toHaveCount(19);
  await expect(first.locator('.project-gallery-more')).toContainText('Diversos outros cards');
  await expect(first.locator('.project-gallery-more')).not.toContainText('E diversos');
  await expect(first.locator('.project-gallery-more')).toContainText('+');
  await expect(first.locator('.project-gallery > *')).toHaveCount(20);
});

test('scroll motion reveals content and respects reduced motion', async ({ page }) => {
  await page.goto('/');
  const blogLink = page.locator('.blog-link');
  const blogBox = await blogLink.boundingBox();
  if (!blogBox) throw new Error('Blog link has no visible bounding box');
  await page.mouse.move(blogBox.x + blogBox.width - 2, blogBox.y + 2);
  await expect.poll(() => blogLink.evaluate((element) => element.style.getPropertyValue('--motion-x'))).not.toBe('0px');
  const firstProject = page.locator('.project').first();
  await firstProject.scrollIntoViewIfNeeded();
  await expect(firstProject).toHaveClass(/is-visible/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await expect(page.locator('.project').first()).toHaveCSS('opacity', '1');
});

test('mobile layout does not overflow horizontally', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
