import { expect, test } from '@playwright/test';

test('Portuguese home has the complete V2 structure', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Lucas Oliveira');
  await expect(page.locator('.marquee-row')).toHaveCount(2);
  await expect(page.locator('.project')).toHaveCount(6);
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
  await expect(page.locator('.lab-card')).toHaveCount(11);
  await page.getByRole('button', { name: 'Alternar tema' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('[data-demo-form] input').fill('teste@example.com');
  await page.getByRole('button', { name: 'Simular inscrição' }).click();
  await expect(page.locator('[data-demo-form] output')).toContainText('nenhum dado foi enviado');
  await page.locator('[data-filter="social"]').click();
  await expect(page.locator('[data-filter-demo] li:visible')).toHaveCount(1);
});

test('mobile layout does not overflow horizontally', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
