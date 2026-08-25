/**
 * Bildpipeline: optimerar en kunds originalbilder för webben.
 *
 *   Kör:  npm run bilder -- <kundslug>
 *   Ex:   npm run bilder -- bjorken
 *
 * Läser original från   content/<slug>/bilder/
 * Skriver optimerat till public/kunder/<slug>/   (WebP, max 2560 px)
 * Genererar             content/<slug>/bilddata.json
 *                       (mått + suddig blur-platshållare per bild)
 *
 * Undermappar (t.ex. galleri/) behålls. Kör om skriptet varje gång du
 * lägger till eller byter bilder - befintliga filer skrivs över.
 *
 * Efteråt: se till att kundens config pekar på .webp-filerna och att
 * config importerar bilddata.json (se content/bjorken/config.ts).
 */

import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const HAR = dirname(fileURLToPath(import.meta.url));
const ROT = join(HAR, "..");

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Användning: npm run bilder -- <kundslug>   (t.ex. bjorken)");
  process.exit(1);
}

const KALLMAPP = join(ROT, "content", slug, "bilder");
const MALMAPP = join(ROT, "public", "kunder", slug);
const DATAFIL = join(ROT, "content", slug, "bilddata.json");

const BILDFORMAT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tiff"]);
const MAX_BREDD = 1920;
const KVALITET = 78;

/** Hittar alla bildfiler rekursivt. */
function hittaBilder(mapp, lista = []) {
  let poster;
  try {
    poster = readdirSync(mapp);
  } catch {
    return lista;
  }
  for (const namn of poster) {
    const full = join(mapp, namn);
    if (statSync(full).isDirectory()) hittaBilder(full, lista);
    else if (BILDFORMAT.has(extname(namn).toLowerCase())) lista.push(full);
  }
  return lista;
}

const original = hittaBilder(KALLMAPP);
if (original.length === 0) {
  console.error(
    `Inga bilder i content/${slug}/bilder/.\n` +
      `Lägg kundens originalbilder där (undermappar är ok) och kör igen.`,
  );
  process.exit(1);
}

const bilddata = {};

for (const kalla of original) {
  const relativSokvag = relative(KALLMAPP, kalla);
  const utanAndelse = relativSokvag.slice(0, -extname(relativSokvag).length);
  const mal = join(MALMAPP, `${utanAndelse}.webp`);
  mkdirSync(dirname(mal), { recursive: true });

  const bild = sharp(kalla).rotate(); // .rotate() rätar upp mobilfoton (EXIF)
  const meta = await bild.metadata();
  const skala = Math.min(1, MAX_BREDD / (meta.width ?? MAX_BREDD));

  const resultat = await bild
    .resize(Math.round((meta.width ?? MAX_BREDD) * skala))
    .webp({ quality: KVALITET })
    .toFile(mal);

  // Suddig platshållare: 16 px bred, inbäddad som data-URI.
  const suddig = await sharp(kalla)
    .rotate()
    .resize(16)
    .webp({ quality: 30 })
    .toBuffer();

  const publikSokvag = `/kunder/${slug}/${utanAndelse.split(sep).join("/")}.webp`;
  bilddata[publikSokvag] = {
    bredd: resultat.width,
    hojd: resultat.height,
    blur: `data:image/webp;base64,${suddig.toString("base64")}`,
  };

  const kb = (resultat.size / 1024).toFixed(0);
  console.log(`  ${publikSokvag.padEnd(48)} ${resultat.width}x${resultat.height}  ${kb} kB`);

  // Delningsbilden behövs även som JPEG i 1200x630 - den genererade
  // Open Graph-bilden (next/og) kan inte läsa WebP.
  if (utanAndelse === "delning") {
    const ogMal = join(MALMAPP, "delning-og.jpg");
    await sharp(kalla)
      .rotate()
      .resize(1200, 630, { fit: "cover" })
      .jpeg({ quality: 80 })
      .toFile(ogMal);
    console.log(`  /kunder/${slug}/delning-og.jpg`.padEnd(50) + " 1200x630  (delningsbild)");
  }
}

writeFileSync(DATAFIL, JSON.stringify(bilddata, null, 2) + "\n");
console.log(`\nKlart. ${original.length} bilder -> public/kunder/${slug}/`);
console.log(`Bilddata (mått + blur) -> content/${slug}/bilddata.json`);
