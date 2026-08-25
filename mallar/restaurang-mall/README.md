# Restaurangmall - Umeå Webbdesign

Återanvändbar basmall för restauranghemsidor, byggd med **Next.js 16, React 19
och Tailwind CSS 4**. Snabb, mobilanpassad, SEO-optimerad för lokala sökningar
i Sverige - och gjord för att en ny kundsajt ska ta minuter att sätta upp,
inte dagar.

## Det här ingår

| Funktion | Var |
|---|---|
| Startsida med tydlig "Boka bord"-knapp | `/` |
| Meny som uppdateras i en enda fil | `/meny` + `content/meny.ts` |
| Öppettider med "Öppet nu"-status i realtid | Alla sidor |
| Adress, telefon och kontaktformulär | `/kontakt` |
| Google Maps-karta + vägbeskrivning | `/hitta-hit` |
| Bildgalleri med ljuslåda | `/` och `/om-oss` |
| Länk till externt bokningssystem | `config/restaurang.ts` |
| SEO: metadata, Open Graph, sitemap, robots.txt | Automatiskt |
| Strukturerad data (schema.org Restaurant + Menu) | Automatiskt |
| Responsiv design: mobil, surfplatta, dator | Hela sajten |

## Kom igång

```bash
npm install
npm run platshallare   # genererar tillfälliga bilder (hoppa över om du har riktiga)
npm run dev            # öppna http://localhost:3000
```

Bygg för produktion:

```bash
npm run build
```

## Anpassa för en ny kund - de tre filerna

Nästan allt styrs från **tre ställen**:

### 1. `config/restaurang.ts` - all fakta och design

Namn, slogan, texter, telefon, adress, koordinater, öppettider, specialdagar,
bokningslänk, sociala medier, **färger**, rundade hörn och SEO-sökord.
Varje fält har en kommentar som förklarar vad det gör.

### 2. `content/meny.ts` - hela menyn

Sektioner (förrätter, varmrätter, lunch ...) med rätter, priser och
märkningar som "Vegetariskt" eller "Glutenfri". Instruktioner finns
överst i filen.

### 3. `public/bilder/` - kundens bilder

| Fil | Format | Används till |
|---|---|---|
| `hero.png` | Liggande, minst 1920 px bred | Startsidans toppbild |
| `om-oss.png` | Stående eller kvadratisk | Om oss-sektionen |
| `delning.png` | Exakt 1200 x 630 px | Delning på Facebook/Google |
| `galleri/*.png` | Valfritt | Bildgalleriet |

JPG och WebP fungerar lika bra - uppdatera bara sökvägarna i
`config/restaurang.ts`.

**Typsnitt** byts med en rad i `src/lib/typsnitt/index.ts`
(fyra färdiga par: klassisk, modern, elegant, varm).

Fullständig steg-för-steg-checklista: **[docs/NY-KUND.md](docs/NY-KUND.md)**

## Kontaktformuläret

Formuläret postar till `/api/kontakt` som skickar e-post via
[Resend](https://resend.com) (gratis upp till 3 000 mejl/mån).
Sätt miljövariablerna i `.env.local` / Vercel - se `.env.example`.
Utan nycklar loggas meddelanden i terminalen under utveckling.
Skydd: honungsfälla mot robotar + takbegränsning per IP.

## Mappstruktur

```
config/restaurang.ts     <- ÄNDRA: all kundinfo och design
content/meny.ts          <- ÄNDRA: menyn
public/bilder/           <- ÄNDRA: kundens bilder
src/lib/typsnitt/        <- ÄNDRA (1 rad): typsnittsval
src/app/                 sidor (start, meny, om-oss, hitta-hit, kontakt)
src/components/          återanvändbara komponenter
src/lib/                 SEO, strukturerad data, öppettidslogik
scripts/                 platshållarbilder
docs/NY-KUND.md          checklista för ny kundsajt
```
