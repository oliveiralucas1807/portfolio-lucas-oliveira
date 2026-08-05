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
  await expect(page.locator('.projects-intro')).toContainText('Projetos e campanhas.');
  await expect(page.locator('.project').first().locator('.project-featured img').nth(1)).toHaveAttribute('src', /dia-do-trabalhador/);
  await expect(page.locator('.project').first().locator('.project-featured img').nth(2)).toHaveAttribute('src', /esmeri/);
  await expect(page.locator('.project-expand-cta').first()).toBeVisible();
  await expect(page.locator('.future-card')).toContainText('Mais cases em breve');
  await expect(page.locator('body')).not.toContainText('Portfólio light para processos seletivos');
  await expect(page.locator('body')).not.toContainText('Cases selecionados');
  await expect(page.locator('.lab-link')).toBeVisible();
  await expect(page.locator('.hero-art img')).toHaveAttribute('src', '/assets/hero/foto-lucas-desktop.webp');
});

test('English home is complete and switchable', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.project')).toHaveCount(6);
  await expect(page.getByText('Ver portfólio em português')).toBeVisible();
});

test('theme persists and laboratory performs no submit', async ({ page }) => {
  await page.goto('/laboratorio/');
  await expect(page.locator('.lab-card')).toHaveCount(6);
  await expect(page.locator('body')).not.toContainText('Newsletter');
  await expect(page.locator('body')).not.toContainText('CMS');
  await page.getByRole('button', { name: 'Alternar tema' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('.parallax-concept')).toHaveCount(3);
});

test('contact opens a centered accessible modal', async ({ page }) => {
  await page.goto('/');
  const contactTrigger = page.getByRole('button', { name: 'Entrar em contato' });
  await contactTrigger.click();
  const contactDialog = page.getByRole('dialog', { name: 'Opções de contato' });
  await expect(contactDialog).toBeVisible();
  const dialogBox = await contactDialog.boundingBox();
  const viewport = page.viewportSize();
  expect(dialogBox && viewport && Math.abs(dialogBox.x + dialogBox.width / 2 - viewport.width / 2)).toBeLessThan(8);
  await expect(contactDialog.locator('svg')).toHaveCount(4);
  await page.keyboard.press('Escape');
  await expect(contactDialog).toBeHidden();
  await expect(contactTrigger).toBeFocused();

});

test('about and floating Spotify preview expose the revised controls', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.about-portrait img')).toBeVisible();
  await expect(page.locator('.skill-chip')).toHaveCount(6);
  const player = page.locator('[data-floating-spotify]');
  await expect(player).toBeVisible();
  await expect(player.getByRole('button', { name: 'Reproduzir playlist' })).toBeDisabled();
  await expect(player.getByRole('button', { name: 'Fechar player' })).toBeVisible();
  await player.getByRole('button', { name: 'Fechar player' }).click();
  await expect(player).toBeHidden();
  await page.reload();
  await expect(player).toBeHidden();
});

test('mobile layout does not overflow horizontally', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
