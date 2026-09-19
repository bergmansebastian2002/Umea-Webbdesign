// Bildpipeline för Livrustning: original i bilder/ -> färdiga webp i src/bilder/.
//
// Alla kursfoton kommer från Livrustnings egen Facebooksida och är tagna med
// olika mobiler under flera år, i allt från lysrör till dagsljus. För att de ska
// se ut som en serie neutraliseras först varje bilds färgstick, sedan får alla
// samma gradering: lägre mättnad, matt svärta i bläckfärg och loggans magenta i
// högdagrarna. Kör: npm run bilder
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const IN = "bilder";
const OUT = "src/bilder";
const MAGENTA = { r: 227, g: 6, b: 70 };
const INK = { r: 23, g: 21, b: 26 };

// källfil -> utfil. Byt ALLTID utnamn när ett motiv byts (cache per URL).
const FOTON = {
  "grupp-dockor": "grupp-dockor",
  "kurs-kontor": "kurs-kontor",
  "hjartstartare-par": "hjartstartare-par",
  "brand-slackare": "brand-slackare",
  "hjartstartare-grupp": "hjartstartare-grupp",
  "skola-hjartstartare": "skola-hjartstartare",
  "hlr-par": "hlr-par",
  "hlr-ovning": "hlr-ovning",
  "hlr-hjartstartare-kontor": "hlr-hjartstartare-kontor",
  "grupp-genomgang": "grupp-genomgang",
  "instruktor-klass": "instruktor-klass",
  "instruktor-portratt": "instruktor-portratt",
  "instruktor-skap": "instruktor-skap",
};

// Enstaka bilder som behöver mer ljus för att hänga med resten av serien.
const LJUS = {
  "instruktor-klass": 1.16, // motljus från gardinerna gör rummet mörkt
};

async function tona(namn, utnamn) {
  const storlek = await sharp(`${IN}/${namn}.jpg`)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .toBuffer();
  const { width, height } = await sharp(storlek).metadata();

  // 1. Neutralisera färgstick (gråvärldsvitbalans, begränsad till ±12 %) så att
  //    varmt lysrör, blått dagsljus och gula gardiner hamnar på samma nivå.
  const { channels } = await sharp(storlek).stats();
  const medel = channels.slice(0, 3).map((c) => c.mean);
  const snitt = medel.reduce((a, b) => a + b, 0) / 3;
  const faktor = medel.map((m) => Math.min(1.12, Math.max(0.88, snitt / m)));

  // 2. Gemensam gradering: lägre mättnad, mjuk kontrast, lyfta skuggor.
  const neutral = await sharp(storlek)
    .linear(faktor, [0, 0, 0])
    .normalise({ lower: 1, upper: 99 })
    .modulate({ saturation: 0.72, brightness: LJUS[namn] ?? 1.02 })
    .linear(0.9, 14)
    .toBuffer();

  // 3. Delad ton: bläckfärg i skuggorna, loggans magenta i högdagrarna.
  const lager = (farg, alpha) =>
    sharp({ create: { width, height, channels: 4, background: { ...farg, alpha } } }).png().toBuffer();
  await sharp(neutral)
    .composite([
      // lighten: inget blir mörkare än bläcket, så svärtan blir matt och lätt violett.
      { input: await lager(INK, 1), blend: "lighten" },
      { input: await lager(MAGENTA, 0.14), blend: "soft-light" },
    ])
    .webp({ quality: 82 })
    .toFile(`${OUT}/${utnamn}.webp`);
  console.log(`foto  ${utnamn}.webp  ${width}x${height}  vitbalans ${faktor.map((f) => f.toFixed(2)).join("/")}`);
}

// Loggan finns bara med vitt ordmärke (för mörk botten). Ljus variant:
// vita/grå pixlar blir bläckfärg, magenta figur och EKG-linje behålls.
async function loggor() {
  const { data, info } = await sharp(`${IN}/logga.png`).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ljus = Buffer.from(data);
  for (let i = 0; i < ljus.length; i += 4) {
    const r = ljus[i], g = ljus[i + 1], b = ljus[i + 2];
    const mattnad = Math.max(r, g, b) - Math.min(r, g, b);
    if (mattnad < 60) {
      ljus[i] = INK.r;
      ljus[i + 1] = INK.g;
      ljus[i + 2] = INK.b;
    }
  }
  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  await sharp(ljus, raw).resize({ width: 1200 }).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT}/logga-ljus-botten.webp`);
  await sharp(`${IN}/logga.png`).resize({ width: 1200 }).webp({ quality: 90, alphaQuality: 100 }).toFile(`${OUT}/logga-mork-botten.webp`);

  // Ikon: bara den springande figuren (vänstra delen av loggan), kvadratisk.
  const figur = await sharp(`${IN}/logga.png`).extract({ left: 0, top: 0, width: 560, height: 602 }).toBuffer();
  // extend måste bli en egen buffer: sharp kör annars resize före extend.
  const kvadrat = await sharp(figur)
    .extend({ left: 21, right: 21, top: 0, bottom: 0, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp(kvadrat).resize(512, 512).png().toFile("src/app/icon.png");
  await sharp({ create: { width: 180, height: 180, channels: 4, background: { r: 253, g: 243, b: 245, alpha: 1 } } })
    .composite([{ input: await sharp(kvadrat).resize(144, 144).png().toBuffer(), left: 18, top: 18 }])
    .png()
    .toFile("src/app/apple-icon.png");
  console.log("logga + ikoner klara");
}

// Reco-märket: bara själva cirkeln, frilagd längs sin egen (exakt runda) kant.
async function reco() {
  const S = 840;
  const mask = Buffer.from(
    `<svg width="${S}" height="${S}"><circle cx="${S / 2}" cy="${S / 2}" r="${S / 2 - 14}" fill="#fff"/></svg>`,
  );
  const frilagd = await sharp(`${IN}/reco-5-ar.jpg`)
    .extract({ left: 180, top: 80, width: S, height: S })
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
  await sharp(frilagd)
    .resize(720)
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(`${OUT}/reco-5-ar-i-rad.webp`);
  console.log("reco-märke klart");
}

await mkdir(OUT, { recursive: true });
for (const [namn, utnamn] of Object.entries(FOTON)) await tona(namn, utnamn);
await loggor();
await reco();
