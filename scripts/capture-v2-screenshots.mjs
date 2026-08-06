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
    const firstProject = page.locator('.project').first();
    await firstProject.locator('summary').click();
    const expandedItems = firstProject.locator('.project-gallery > *');
    for (let index = 0; index < await expandedItems.count(); index += 1) {
      await expandedItems.nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(30);
    }
    await firstProject.locator('.project-gallery').screenshot({ path: 'docs/processo-v2/screenshots/galeria-case-expandida-final.png' });
    await page.getByRole('button', { name: 'Entrar em contato' }).click();
    await page.screenshot({ path: 'docs/processo-v2/screenshots/modal-contato-final.png' });
  }
  await page.close();
}
const blog = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await blog.goto(`${base}/blog/`, { waitUntil: 'networkidle' });
for (let y = 0; y < await blog.evaluate(() => document.body.scrollHeight); y += 700) {
  await blog.evaluate((top) => scrollTo(0, top), y);
  await blog.waitForTimeout(80);
}
await blog.evaluate(() => scrollTo(0, 0));
await blog.screenshot({ path: 'docs/processo-v2/screenshots/blog-desktop-final.png', fullPage: true });
await blog.close();
await browser.close();
