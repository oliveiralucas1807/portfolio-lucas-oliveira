import { chromium } from 'playwright';

const baseUrl = process.argv[2].replace(/\/$/, '');
const routes = ['/', '/en/', '/blog/', '/en/blog/'];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const consoleErrors = [];
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});

for (const route of routes) {
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error(`HTTP failure at ${route}: ${response?.status() ?? 'no response'}`);
}

await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
const themeButton = page.getByRole('button', { name: 'Alternar tema' });
if (!(await themeButton.isEnabled())) throw new Error('Theme React island did not hydrate');
await themeButton.click();
if ((await page.locator('html').getAttribute('data-theme')) !== 'dark') throw new Error('Theme toggle did not update the page');

await page.getByRole('button', { name: 'Entrar em contato' }).click();
if (!(await page.getByRole('dialog').isVisible())) throw new Error('Contact modal did not open');
if (consoleErrors.length) throw new Error(`Browser console errors: ${consoleErrors.join(' | ')}`);

console.log('PAGES_PREVIEW_OK routes=4 theme=ok modal=ok console_errors=0');
await browser.close();
