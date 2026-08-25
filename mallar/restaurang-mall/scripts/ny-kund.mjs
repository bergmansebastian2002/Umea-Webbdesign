/**
 * Interaktiv guide som skapar en ny kund från demokundens mall.
 *
 *   Kör:  npm run ny-kund
 *
 * Skriptet frågar efter grunduppgifterna, skapar content/<slug>/ med en
 * förifylld config, registrerar kunden i content/kunder.ts och skriver
 * ut en checklista över vad som återstår.
 */

import { createInterface } from "node:readline";
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROT = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Egen radkö ovanpå readline: tappar inga rader även när flera kommer i
 * samma chunk (t.ex. vid inklistring eller när svar pipas in).
 */
const las = createInterface({ input: process.stdin });
const kolista = [];
const vantande = [];
let stangd = false;
las.on("line", (rad) => {
  const mottagare = vantande.shift();
  if (mottagare) mottagare(rad);
  else kolista.push(rad);
});
las.on("close", () => {
  stangd = true;
  while (vantande.length) vantande.shift()("");
});
function lasRad() {
  if (kolista.length > 0) return Promise.resolve(kolista.shift());
  if (stangd) return Promise.resolve("");
  return new Promise((los) => vantande.push(los));
}

/** Läser en fil med radslut normaliserade till LF (git på Windows kan checka ut CRLF). */
function lasFil(sokvag) {
  return readFileSync(sokvag, "utf-8").replace(/\r\n/g, "\n");
}

/** Gör om t.ex. "Trattoria Höga Kusten" till "trattoria-hoga-kusten". */
function tillSlug(namn) {
  return namn
    .toLowerCase()
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o")
    .replace(/é/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** "090-123 45 67" -> "+4690123456" (bästa gissning - kontrollera efteråt). */
function tillTelefonLank(telefon) {
  const siffror = telefon.replace(/[^0-9]/g, "");
  return siffror.startsWith("0") ? `+46${siffror.slice(1)}` : `+${siffror}`;
}

async function fraga(text, standard) {
  process.stdout.write(standard ? `${text} [${standard}]: ` : `${text}: `);
  const svar = (await lasRad()).trim();
  return svar || standard || "";
}

console.log("\n=== Ny restaurangkund ===\n");

const namn = await fraga("Restaurangens namn (t.ex. Trattoria Fiore)");
if (!namn) {
  console.error("Ett namn krävs. Avbryter.");
  process.exit(1);
}

const slug = await fraga("Slug (mappnamn, a-z och bindestreck)", tillSlug(namn));
const malMapp = join(ROT, "content", slug);
if (existsSync(malMapp)) {
  console.error(`content/${slug}/ finns redan. Avbryter.`);
  process.exit(1);
}

const stad = await fraga("Ort", "Umeå");
const slogan = await fraga("Slogan (kort rad under namnet)", `Restaurang i ${stad}`);
const telefon = await fraga("Telefon (som det ska visas)", "090-123 45 67");
const epost = await fraga("E-post", `info@${slug.replace(/-/g, "")}.se`);
const gata = await fraga("Gatuadress", "Storgatan 1");
const postnummer = await fraga("Postnummer", "903 26");
const doman = await fraga("Domän (utan https://)", `www.${slug.replace(/-/g, "")}.se`);
const bokningslank = await fraga("Bokningslänk (tomt = bokning via telefon)", "");
const artDirection = await fraga('Art direction: "klassisk", "nordisk" eller "livlig"', "klassisk");
las.close();

// --- Skapa kundmappen från demokunden --------------------------------------
mkdirSync(join(malMapp, "bilder", "galleri"), { recursive: true });
cpSync(join(ROT, "content", "bjorken", "meny.json"), join(malMapp, "meny.json"));

let config = lasFil(join(ROT, "content", "bjorken", "config.ts"));

const variabel = slug.replace(/-/g, "_");
const ersattningar = [
  ['slug: "bjorken"', `slug: "${slug}"`],
  ['namn: "Restaurang Björken"', `namn: "${namn}"`],
  ['slogan: "Norrländsk mat, lagad från grunden"', `slogan: "${slogan}"`],
  ['sajtUrl: "https://www.restaurangbjorken.se"', `sajtUrl: "https://${doman}"`],
  ['telefon: "090-123 45 67"', `telefon: "${telefon}"`],
  ['telefonLank: "+4690123456"', `telefonLank: "${tillTelefonLank(telefon)}"`],
  ['epost: "boka@restaurangbjorken.se"', `epost: "${epost}"`],
  ['gata: "Storgatan 42"', `gata: "${gata}"`],
  ['postnummer: "903 26"', `postnummer: "${postnummer}"`],
  ['ort: "Umeå"', `ort: "${stad}"`],
  ['stad: "Umeå"', `stad: "${stad}"`],
  ['artDirection: "klassisk"', `artDirection: "${artDirection}"`],
  [/\/kunder\/bjorken\//g, `/kunder/${slug}/`],
  ["const bjorken: Restaurangkonfig", `const ${variabel}: Restaurangkonfig`],
  ["export default bjorken;", `export default ${variabel};`],
];
if (bokningslank) {
  ersattningar.push(['lank: "https://www.bokabord.se/"', `lank: "${bokningslank}"`]);
} else {
  ersattningar.push(["aktiv: true", "aktiv: false"]);
}
for (const [fran, till] of ersattningar) {
  config = config.replace(fran, till);
}

// Betyg och evenemang är Björkens demodata - nollställ för den nya kunden.
config = config
  .replace(/ {2}betyg: \{[\s\S]*?\n {2}\},\n/, "  // betyg: fyll i när kunden har Google-omdömen\n")
  .replace(/ {2}evenemang: \[[\s\S]*?\n {2}\],\n/, "  evenemang: [],\n");

writeFileSync(join(malMapp, "config.ts"), config);

// Tom bilddata tills bilderna körts genom pipelinen.
writeFileSync(join(malMapp, "bilddata.json"), "{}\n");

writeFileSync(
  join(malMapp, "BILDRATTIGHETER.md"),
  [
    `# Bildrättigheter - ${namn}`,
    "",
    "Dokumentera VARJE bild innan lansering. Se docs/bildinsamling.md.",
    "",
    "| Fil | Motiv | Källa | Fotograf | Godkännande |",
    "|---|---|---|---|---|",
    "| | | | | |",
    "",
  ].join("\n"),
);

// --- Registrera i content/kunder.ts ----------------------------------------
const registerSokvag = join(ROT, "content", "kunder.ts");
let register = lasFil(registerSokvag);
register = register
  .replace(
    'import bjorken from "./bjorken/config";',
    `import bjorken from "./bjorken/config";\nimport ${variabel} from "./${slug}/config";`,
  )
  .replace(
    "export const KUNDER = {\n  bjorken,",
    `export const KUNDER = {\n  bjorken,\n  "${slug}": ${variabel},`,
  );
writeFileSync(registerSokvag, register);

const bokningsrad = bokningslank
  ? ""
  : "\n     - bokningslänk (bokning är avstängd tills vidare)";

console.log(`
Klart! content/${slug}/ är skapad och registrerad.

Återstår:
  1. Lägg kundens bilder i content/${slug}/bilder/ (+ galleri/)
     och fyll i content/${slug}/BILDRATTIGHETER.md
  2. Kör: npm run bilder -- ${slug}
  3. Öppna content/${slug}/config.ts:
     - koordinater (högerklicka på platsen i Google Maps)
     - öppettider, texter, sociala länkar, sökord${bokningsrad}
  4. Uppdatera content/${slug}/meny.json med kundens meny
  5. Testa lokalt:  NEXT_PUBLIC_KUND=${slug} i .env.local  ->  npm run dev
  6. Nytt Vercel-projekt mot samma repo med miljövariabeln
     NEXT_PUBLIC_KUND=${slug} - se docs/SNABBSTART.md
`);
