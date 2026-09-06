import { chromium } from 'playwright';
const browserPath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await chromium.launch({ headless: true, executablePath: browserPath });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'mobile-before.png', fullPage: true });
const input = page.locator('#screenshot');
await input.setInputFiles({ name: 'test.png', mimeType: 'image/png', buffer: Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO9qk4cAAAAASUVORK5CYII=',
  'base64'
)});
await page.waitForTimeout(600);
await page.screenshot({ path: 'mobile-after.png', fullPage: true });
console.log('title', await page.title());
console.log('gate class', await page.locator('#application-gate').getAttribute('class'));
console.log('gate aria', await page.locator('#application-gate').getAttribute('aria-hidden'));
await browser.close();
