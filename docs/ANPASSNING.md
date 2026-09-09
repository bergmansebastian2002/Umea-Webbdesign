# ANPASSNING - exakt vad du byter per kund

Allt kundspecifikt ligger i `mallar/restaurang-mall/content/<slug>/`.
Du ska ALDRIG behöva röra `src/` för att anpassa en kundsajt.

## Filerna

| Fil | Innehåll |
|---|---|
| `config.ts` | Allt: namn, färger, öppettider, bokning, SEO, sektioner |
| `meny.json` | Hela menyn |
| `bilder/` | Originalbilder (körs genom `npm run bilder -- <slug>`) |
| `bilddata.json` | Genereras av bildskriptet - rör inte för hand |
| `BILDRATTIGHETER.md` | Dokumentation av varje bilds rättigheter |

## config.ts - fält för fält

### Namn och texter

```ts
namn: "Restaurang Björken",          // exakt som det ska visas
slogan: "Norrländsk mat, ...",       // raden under namnet i heron
kortBeskrivning: "...",              // 1-2 meningar; syns i Google
omOssStycken: ["...", "...", "..."], // varje sträng = ett stycke
```

### Kontakt och plats

```ts
kontakt: {
  telefon: "090-123 45 67",     // som det VISAS
  telefonLank: "+4690123456",   // klickbart format - måste börja med +46
  epost: "boka@...",
  gata: "Storgatan 42",
  postnummer: "903 26",
  ort: "Umeå",
  latitud: 63.8258,             // högerklicka i Google Maps -> klicka
  longitud: 20.263,             //   på siffrorna så kopieras de
},
```

### Bokning

```ts
bokning: {
  aktiv: true,                  // false = "Ring och boka" visas istället
  lank: "https://...",          // Caspeco, Bokabord, resmio, OpenTable ...
  knapptext: "Boka bord",
  hjalptext: "Eller ring ...",  // raden under knappen
},
```

Länken öppnas alltid i ny flik med `rel="noopener"` - inget mer behövs.

### Färger och känsla

```ts
design: {
  artDirection: "klassisk",     // "klassisk" | "nordisk" | "livlig"
  // farger: { accent: "#7a1f1f" },  // valfri överstyrning per färg
  // rundning: 8,                    // valfri, px
},
```

| Art direction | Känsla | Passar |
|---|---|---|
| `klassisk` | Varm, mörkgrön/guld, serifrubriker | Fine dining, husmanskost |
| `nordisk` | Ljus, luftig, sans-serif | Bistro, brunch, bageri |
| `livlig` | Högkontrast, röd accent, versalrubriker | Pizzeria, burgare, streetfood |

Överstyr enskilda färger med `farger: { ... }` - testa kontrasten på
[webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker)
(minst 4.5:1 för text).

### Öppettider

```ts
oppettider: {
  mandag: { stangt: true },
  tisdag: { oppnar: "11:00", stanger: "22:00" },
  fredag: { oppnar: "11:00", stanger: "01:00" },  // efter midnatt fungerar
  sondag: { oppnar: "13:00", stanger: "20:00", notering: "Endast à la carte" },
},
specialdagar: [
  { datum: "2026-12-24", namn: "Julafton", stangt: true },
  { datum: "2026-12-31", namn: "Nyårsafton", oppnar: "17:00", stanger: "02:00" },
],
```

"Öppet nu"-statusen räknas ut automatiskt (svensk tidszon), inklusive
stängning efter midnatt och specialdagar.

### Betyg och evenemang

```ts
betyg: {
  snitt: 4.6, antal: 214,       // från kundens Google Företagsprofil
  recensioner: [{ text: "...", namn: "Anna L.", kalla: "Google" }],
},
evenemang: [
  { rubrik: "Afterwork", beskrivning: "...", datumText: "Fredagar 16-18",
    lank: "https://..." },      // lank är valfri
],
```

Utelämna `betyg` / tomt `evenemang: []` -> sektionerna döljs helt.

### Startsidans sektioner - ordning och urval

```ts
startsidaSektioner: [
  "omOss", "menyHojdpunkter", "galleri", "betyg",
  "evenemang", "bokaCta", "hittaHit",
],
```

Ta bort en rad för att dölja sektionen; byt ordning genom att flytta
rader. `menySmakprov` (textutdrag ur menyn) finns som alternativ till
`menyHojdpunkter` (bildkort). `bildspel` (rullande bildspel med
övertoning) finns som alternativ till `galleri` (klickbart rutnät) -
båda visar bilderna i `bilder.galleri`.

### SEO

```ts
seo: {
  stad: "Umeå",
  omrade: "Centrum",                       // valfri
  sokord: ["restaurang Umeå", "boka bord Umeå", "lunch Umeå", ...],
  kokstyper: ["Norrländsk", "Svensk"],     // enligt Googles kategorier
  prisniva: "$$",                          // $ till $$$$
},
```

Skriv sökorden som en gäst söker: `"[kökstyp] restaurang [ort]"`,
`"boka bord [ort]"`, `"julbord [ort]"`.

## meny.json

```json
{
  "namn": "Halstrad fjällröding",
  "beskrivning": "Potatispuré, brynt smör ...",
  "pris": 335,                        // ELLER "prisText": "Dagspris"
  "markningar": ["Vegetariskt"],      // även "Vegansk", "Glutenfri"
  "allergener": ["Laktos", "Nötter"], // visas som "Innehåller: ..."
  "populär": true,                    // lyfts fram med ram
  "bild": "/kunder/<slug>/....webp"   // ger rätten plats i Menyhöjdpunkter
}
```

Menyfiltret (vegetariskt/veganskt/glutenfritt) styrs av `markningar`.

## Bilder

1. Original i `content/<slug>/bilder/` - `hero`, `om-oss`, `delning`
   + `galleri/*`-bilder. JPG/PNG, minst 2000 px breda.
2. `npm run bilder -- <slug>` -> WebP + blur-data + `delning-og.jpg`
3. Peka i config på `/kunder/<slug>/<namn>.webp`

Utan `delning`-bild genereras delningsbilden helt grafiskt i kundens
färger - det ser också bra ut.

## Vad du INTE ändrar per kund

`src/`-mappen (komponenter, sidor, SEO-logik), `globals.css`,
typsnittsfilerna. Behöver en kund något som inte går att styra från
config - bygg då in det som ett nytt config-fält så alla kunder får
nytta av det.
