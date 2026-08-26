import { fileURLToPath } from "node:url";
import path from "node:path";

import puppeteer from "puppeteer-core";

/**
 * Regenerates the portfolio preview images in public/images/exempel/ by
 * screenshotting the live example sites. Run after redesigning a demo site:
 *
 *   npm run exempelbilder
 *
 * Requires Google Chrome installed at the default Windows location.
 */
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "images",
  "exempel",
);

const SHOTS = [
  { url: "https://restaurang-bjorken-coral.vercel.app/", file: "bjorken.webp", width: 1600, height: 900 },
  { url: "https://restaurang-ronyas.vercel.app/meny", file: "ronyas.webp", width: 1600, height: 900 },
  { url: "https://restaurang-ronyas.vercel.app/meny", file: "ronyas-mobil.webp", width: 390, height: 844, mobile: true },
];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });

for (const shot of SHOTS) {
  const page = await browser.newPage();
  await page.setViewport({
    width: shot.width,
    height: shot.height,
    deviceScaleFactor: shot.mobile ? 2 : 1.2,
    isMobile: Boolean(shot.mobile),
    hasTouch: Boolean(shot.mobile),
  });
  // Pre-decline the analytics consent so the banner is not in the shot.
  await page.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem("samtycke-analys", "nej");
    } catch {}
  });
  await page.goto(shot.url, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((resolve) => setTimeout(resolve, 1500));
  await page.screenshot({ path: path.join(OUT, shot.file), type: "webp", quality: 82 });
  console.log("saved", shot.file);
  await page.close();
}

await browser.close();
