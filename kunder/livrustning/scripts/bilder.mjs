// Bildpipeline för Livrustning: original i bilder/ -> färdiga webp i src/bilder/.
//
// Alla kursfoton kommer från Livrustnings egen Facebooksida och är tagna med
// olika mobiler under flera år, i allt från lysrör till dagsljus. För att de ska
// se ut som en serie neutraliseras först varje bilds färgstick, sedan får alla
// samma gradering: lägre mättnad, matt svärta i bläckfärg och loggans magenta i
// högdagrarna. Kör: npm run bilder
import sharp from "sharp";
import { mkdir, readFile } from "node:fs/promises";

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

// Bilder som kunden levererat färdiga (2026-11-19): produktbilder, miljöbilder
// och porträtt. De graderas inte, eftersom hjärtstartarens och skyltarnas
// färger ska vara korrekta. Bara skalning och webp.
const RENA = {
  "sakerhetsdag-kollage.jpg": "sakerhetsdag-kollage",
  "ehlr-event-sal.jpg": "ehlr-event-sal",
  "instruktorsutbildning.jpg": "instruktorsutbildning",
  "hjartstartare-i-hand.jpg": "hjartstartare-i-hand",
  "hjartstartare-hemma.jpg": "hjartstartare-hemma",
  "hjartstartare-spanien.jpg": "hjartstartare-spanien",
  "hjartstartarpaket-kontor.jpg": "hjartstartarpaket-kontor",
  // Levererad av Sebbe 2026-11-24 (AI-bild, grönt utomhusskåp på husfasad).
  "hjartstartarpaket-utomhus.webp": "hjartstartarpaket-utomhus",
  // Levererad av Sebbe 2026-11-25 (AI-bild: tre deltagare och instruktör övar HLR med hjärtstartare).
  "ehlr-traning-kontor.webp": "ehlr-traning-kontor",
  "johnny-sundin.png": "johnny-sundin",
  // Kundens två kursfoton (640 px breda), uppskalade 4x med Real-ESRGAN och
  // efterbehandlade (ljus, färg, kontrast) 2026-11-20. Originalen ligger kvar
  // som traning-pa-plats-1/2.jpg.
  "traning-pa-plats-1-skarp.jpg": "traning-pa-plats-1-skarp",
  "traning-pa-plats-2-skarp.jpg": "traning-pa-plats-2-skarp",
  "peter-jonsson.png": "peter-jonsson",
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

// Startsidans avslutande bild (2026-11-20): AI-förbättrad version av kursbilden
// hlr-ovning, levererad som skiss med rubrik och text inbrända till vänster.
// Bara den textfria högra delen används (nästan exakt 4:3). Ograderad.
// Utsnittet är bara 1078 px brett men visas över halva skärmen: det skalas upp
// med Lanczos och skärps lätt (som STORA nedan), så att webbläsaren slipper
// förstora det själv. Nytt filnamn 2026-11-25 (cache per URL).
async function praktiskTraning() {
  const utsnitt = await sharp(`${IN}/praktisk-traning-med-text.webp`)
    .extract({ left: 880, top: 0, width: 1078, height: 803 })
    .toBuffer();
  const { width, height } = await sharp(utsnitt)
    .resize({ width: 2200, kernel: "lanczos3" })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.4 })
    .webp({ quality: 90 })
    .toFile(`${OUT}/praktisk-traning-stor.webp`);
  console.log(`stor  praktisk-traning-stor.webp  ${width}x${height}`);
}

// Toppbilden på Så går det till visas stående (4:5). Utsnittet görs här ur den
// AI-uppskalade originalbilden, så att webbläsaren får en fil i rätt form och
// rätt storlek i stället för att förstora en liggande bild.
async function instruktorPortratt() {
  const meta = await sharp(`${IN}/instruktorsutbildning-ai.jpg`).metadata();
  const bredd = Math.round(meta.height * 0.8);
  const { width, height } = await sharp(`${IN}/instruktorsutbildning-ai.jpg`)
    .extract({ left: Math.round((meta.width - bredd) * 0.36), top: 0, width: bredd, height: meta.height })
    .resize({ width: 1200, kernel: "lanczos3" })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 1.2 })
    .webp({ quality: 90 })
    .toFile(`${OUT}/instruktorsutbildning-staende.webp`);
  console.log(`ren   instruktorsutbildning-staende.webp  ${width}x${height}`);
}

async function ren(fil, utnamn) {
  const { width, height } = await sharp(`${IN}/${fil}`)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(`${OUT}/${utnamn}.webp`);
  console.log(`ren   ${utnamn}.webp  ${width}x${height}`);
}

// Startsidans två bildkort visar fotona stort. Originalen är bara 1024-1408 px
// breda, vilket blir mjukt på skärmar med hög upplösning. Här skalas de upp
// med Lanczos och skärps lätt en gång, så att webbläsaren slipper förstora dem.
// Egna filnamn, så att originalen på övriga sidor inte påverkas.
const STORA = {
  "ehlr-event-sal.jpg": "ehlr-event-sal-stor",
  // AI-uppskalad 4x med Real-ESRGAN från instruktorsutbildning.jpg (2026-11-22).
  "instruktorsutbildning-ai.jpg": "instruktorsutbildning-skarp",
};

async function stor(fil, utnamn) {
  const { width, height } = await sharp(`${IN}/${fil}`)
    .rotate()
    .resize({ width: 2200, kernel: "lanczos3" })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.4 })
    .webp({ quality: 88 })
    .toFile(`${OUT}/${utnamn}.webp`);
  console.log(`stor  ${utnamn}.webp  ${width}x${height}`);
}

// Kundloggor (startsidans kundband). Källor: nicetobealive.se (raster) och
// Svenska kyrkans och Folkbildningsrådets egna webbplatser (SVG), 2026-11-20.
// Loggorna behåller sina egna färger. Den vita bakgrunden görs genomskinlig
// med "färg till alfa": varje pixel delas upp i loggans färg och en täckning,
// så att kantutjämningen blir ren även mot det rosa papperet.
const KUNDLOGGOR = [
  "handelsbanken.png",
  "atlas-copco.png",
  "atea.png",
  "fastighetsbyran.png",
  "svenska-kyrkan.svg",
  "hitachi.png",
  "stockholms-stad.png",
  "db-schenker.png",
  "sturebadet.png",
  "folkbildningsradet.svg",
  "itrim.png",
];

// Folkbildningsrådets SVG är den vita versionen för deras mörka sidhuvud.
// På ljus botten är ordmärket vinrött (#980048, ur deras egen logotypfil).
const SVG_FARGER = {
  "folkbildningsradet.svg": [["fill:#fff", "fill:#980048"]],
};

async function kundlogga(fil) {
  const kalla = `${IN}/kunder/${fil}`;
  const utnamn = fil.replace(/\.(png|svg)$/, "");

  if (fil.endsWith(".svg")) {
    // SVG har redan genomskinlig botten: rita, byt färger vid behov och beskär.
    let svg = await readFile(kalla, "utf8");
    for (const [fran, till] of SVG_FARGER[fil] ?? []) svg = svg.split(fran).join(till);
    const ritad = await sharp(Buffer.from(svg), { density: 900 })
      .resize({ height: 220, width: 900, fit: "inside" })
      .png()
      .toBuffer();
    const info = await sharp(ritad).trim().png({ compressionLevel: 9 }).toFile(`${OUT}/kunder/${utnamn}.png`);
    console.log(`logga ${utnamn}.png  ${info.width}x${info.height}`);
    return;
  }

  const platt = await sharp(kalla)
    .flatten({ background: "#ffffff" })
    .trim({ background: "#ffffff", threshold: 12 })
    .toBuffer();
  const { data, info } = await sharp(platt).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const ut = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    // Täckning = hur långt från vitt den mest mättade kanalen ligger.
    // Nästan vitt (brus i komprimeringen) blir helt genomskinligt.
    const avstand = 255 - Math.min(r, g, b);
    const a = avstand < 10 ? 0 : avstand / 255;
    const farg = (c) => (a === 0 ? 255 : Math.max(0, Math.min(255, Math.round(255 - (255 - c) / a))));
    ut[j] = farg(r);
    ut[j + 1] = farg(g);
    ut[j + 2] = farg(b);
    ut[j + 3] = Math.round(a * 255);
  }
  await sharp(ut, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(`${OUT}/kunder/${utnamn}.png`);
  console.log(`logga ${utnamn}.png  ${info.width}x${info.height}`);
}

// Nice To Be Alives logga (hjärtat + "Nice To Be ALIVE"), från nicetobealive.se
// 2026-11-22. Originalet har svart ordmärke. Mörk variant: svarta/grå pixlar
// blir vita, hjärtats röda toner behålls.
async function loggor() {
  const kalla = await sharp(`${IN}/logga-nicetobealive.png`).ensureAlpha().trim().png().toBuffer();
  const { data, info } = await sharp(kalla).raw().toBuffer({ resolveWithObject: true });
  const vit = Buffer.from(data);
  for (let i = 0; i < vit.length; i += 4) {
    const r = vit[i], g = vit[i + 1], b = vit[i + 2];
    if (Math.max(r, g, b) - Math.min(r, g, b) < 40) {
      vit[i] = 255;
      vit[i + 1] = 255;
      vit[i + 2] = 255;
    }
  }
  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  await sharp(kalla).resize({ width: 900 }).webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT}/logga-ntba-ljus-botten.webp`);
  await sharp(vit, raw).resize({ width: 900 }).webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT}/logga-ntba-mork-botten.webp`);

  // Ikon: bara hjärtat, kvadratiskt med luft runt om.
  const hjarta = await sharp(`${IN}/ikon-nicetobealive.png`).ensureAlpha().trim().png().toBuffer();
  const genomskinlig = { r: 0, g: 0, b: 0, alpha: 0 };
  const ikon = (storlek, inre) =>
    sharp(hjarta).resize(inre, inre, { fit: "contain", background: genomskinlig }).png().toBuffer();
  await sharp({ create: { width: 512, height: 512, channels: 4, background: genomskinlig } })
    .composite([{ input: await ikon(512, 448), left: 32, top: 32 }])
    .png()
    .toFile("src/app/icon.png");
  await sharp({ create: { width: 180, height: 180, channels: 4, background: { r: 20, g: 17, b: 22, alpha: 1 } } })
    .composite([{ input: await ikon(180, 128), left: 26, top: 26 }])
    .png()
    .toFile("src/app/apple-icon.png");
  console.log(`logga + ikoner klara (${info.width}x${info.height})`);
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
for (const [fil, utnamn] of Object.entries(RENA)) await ren(fil, utnamn);
for (const [fil, utnamn] of Object.entries(STORA)) await stor(fil, utnamn);
await praktiskTraning();
await instruktorPortratt();
await mkdir(`${OUT}/kunder`, { recursive: true });
for (const fil of KUNDLOGGOR) await kundlogga(fil);
await loggor();
await reco();
