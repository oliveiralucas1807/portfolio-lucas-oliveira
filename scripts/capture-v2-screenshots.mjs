import { chromium } from 'playwright';

const base = 'http://127.0.0.1:4321';
const outputs = [
  { name: 'diagonal-home-desktop-final.png', viewport: { width: 1440, height: 900 } },
  { name: 'diagonal-home-mobile-final.png', viewport: { width: 390, height: 844 } },
];

const browser = await chromium.launch({ headless: true });
for (const output of outputs) {
  const page = await browser.newPage({ viewport: output.viewport });
  await page.goto(base, { waitUntil: 'networkidle' });
  for (let y = 0; y < await page.evaluate(() => document.body.scrollHeight); y += Math.floor(output.viewport.height * .8)) {
    await page.evaluate((top) => scrollTo(0, top), y);
    await page.waitForTimeout(40);
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: `docs/processo-v2/screenshots/${output.name}`, fullPage: true });
  if (output.viewport.width === 1440) {
    await page.getByRole('button', { name: 'Entrar em contato' }).click();
    await page.screenshot({ path: 'docs/processo-v2/screenshots/modal-contato-final.png' });
  }
  await page.close();
}
await browser.close();
