import { expect, test } from '@playwright/test';

test('Portuguese home has the complete V2 structure', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Lucas Oliveira');
  await expect(page.locator('.marquee-row')).toHaveCount(2);
  await expect(page.locator('.project')).toHaveCount(6);
  await expect(page.locator('.project-featured')).toHaveCount(6);
  await expect(page.locator('.project-featured').first().locator('img')).toHaveCount(3);
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
});

test('contact and Spotify open accessible modals', async ({ page }) => {
  await page.goto('/');
  const contactTrigger = page.getByRole('button', { name: 'Entrar em contato' });
  await contactTrigger.click();
  const contactDialog = page.getByRole('dialog', { name: 'Opções de contato' });
  await expect(contactDialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(contactDialog).toBeHidden();
  await expect(contactTrigger).toBeFocused();

  await page.getByRole('button', { name: 'Abrir informações da playlist' }).click();
  const spotifyDialog = page.getByRole('dialog', { name: 'Playlist em preparação' });
  await expect(spotifyDialog).toBeVisible();
  await page.getByRole('button', { name: 'Fechar janela' }).click();
  await expect(spotifyDialog).toBeHidden();
});

test('mobile layout does not overflow horizontally', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
