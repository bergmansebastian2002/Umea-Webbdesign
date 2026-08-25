/**
 * Genererar platshållarbilder i /public/bilder så mallen ser komplett ut
 * innan kundens riktiga bilder finns på plats.
 *
 * Kör: npm run platshallare
 *
 * Byt ut bilderna mot riktiga foton (JPG eller WebP) innan lansering och
 * uppdatera sökvägarna i config/restaurang.ts om filnamnen ändras.
 */

import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HAR = dirname(fileURLToPath(import.meta.url));
const BILDMAPP = join(HAR, "..", "public", "kunder", "bjorken");

/* --- Minimal PNG-skrivare (inga externa beroenden) ----------------------- */

const CRC_TABELL = (() => {
  const tabell = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    tabell[n] = c >>> 0;
  }
  return tabell;
})();

function crc32(buffert) {
  let c = 0xffffffff;
  for (const byte of buffert) c = CRC_TABELL[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function bit(typ, data) {
  const langd = Buffer.alloc(4);
  langd.writeUInt32BE(data.length, 0);
  const kropp = Buffer.concat([Buffer.from(typ, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(kropp), 0);
  return Buffer.concat([langd, kropp, crc]);
}

function skrivPng(bredd, hojd, pixlar) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(bredd, 0);
  ihdr.writeUInt32BE(hojd, 4);
  ihdr[8] = 8; // bitdjup
  ihdr[9] = 2; // färgtyp RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    bit("IHDR", ihdr),
    bit("IDAT", deflateSync(pixlar, { level: 9 })),
    bit("IEND", Buffer.alloc(0)),
  ]);
}

/* --- Bildgenerering ------------------------------------------------------ */

const hex = (varde) => [
  parseInt(varde.slice(1, 3), 16),
  parseInt(varde.slice(3, 5), 16),
  parseInt(varde.slice(5, 7), 16),
];

/** Ritar en mjuk diagonal toning med vinjett - ser ut som ett dämpat foto. */
function skapaBild(bredd, hojd, franHex, tillHex) {
  const fran = hex(franHex);
  const till = hex(tillHex);
  const rader = Buffer.alloc(hojd * (bredd * 3 + 1));

  for (let y = 0; y < hojd; y++) {
    const radStart = y * (bredd * 3 + 1);
    rader[radStart] = 0; // filtertyp "None"

    for (let x = 0; x < bredd; x++) {
      const diagonal = (x / bredd) * 0.35 + (y / hojd) * 0.65;

      // Vinjett: mörkare mot kanterna.
      const dx = x / bredd - 0.5;
      const dy = y / hojd - 0.5;
      const vinjett = 1 - Math.min(1, (dx * dx + dy * dy) * 1.15) * 0.35;

      // Diskret bandning som bryter upp ytan lite.
      const struktur = Math.sin((x + y) / 90) * 0.015;

      const t = Math.min(1, Math.max(0, diagonal + struktur));
      const index = radStart + 1 + x * 3;

      for (let kanal = 0; kanal < 3; kanal++) {
        const varde = (fran[kanal] + (till[kanal] - fran[kanal]) * t) * vinjett;
        rader[index + kanal] = Math.round(Math.min(255, Math.max(0, varde)));
      }
    }
  }

  return skrivPng(bredd, hojd, rader);
}

const BILDER = [
  { fil: "hero.png", b: 1920, h: 1080, fran: "#3a3128", till: "#12100e" },
  { fil: "om-oss.png", b: 1200, h: 1500, fran: "#4a3d30", till: "#1a1613" },
  { fil: "delning.png", b: 1200, h: 630, fran: "#2f3a34", till: "#141a17" },
  { fil: "galleri/matsal.png", b: 1200, h: 900, fran: "#4b3f33", till: "#1c1815" },
  { fil: "galleri/ratt-1.png", b: 900, h: 1200, fran: "#5a4a37", till: "#231d17" },
  { fil: "galleri/baren.png", b: 1200, h: 900, fran: "#333c3a", till: "#151918" },
  { fil: "galleri/koket.png", b: 1200, h: 900, fran: "#453a2f", till: "#191512" },
  { fil: "galleri/ratt-2.png", b: 1200, h: 900, fran: "#5e4b34", till: "#241c14" },
  { fil: "galleri/entre.png", b: 1200, h: 900, fran: "#2b332f", till: "#121615" },
];

mkdirSync(join(BILDMAPP, "galleri"), { recursive: true });

for (const bild of BILDER) {
  const mal = join(BILDMAPP, bild.fil);
  mkdirSync(dirname(mal), { recursive: true });
  const data = skapaBild(bild.b, bild.h, bild.fran, bild.till);
  writeFileSync(mal, data);
  console.log(`  ${bild.fil.padEnd(24)} ${bild.b}x${bild.h}  ${(data.length / 1024).toFixed(0)} kB`);
}

console.log(`\nKlart. ${BILDER.length} platshållarbilder skrivna till public/bilder/.`);
