# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 + React 19 + Tailwind 4, helt statisk, samma stack som byråns övriga sajter i repot (`byrasajt/`, `mallar/restaurang-mall/`). Egen app i `kunder/livrustning/`. Beslutat av byrån (Umeå Webbdesign), inte av kunden.

## Users

Den som ansvarar för arbetsmiljö och säkerhet på ett företag eller en organisation: HR, arbetsmiljöansvarig, kontorschef, rektor, ordförande i en bostadsrättsförening. De letar efter ett enkelt sätt att få hela personalen utbildad i HLR, första hjälpen och brand, ofta inför en kick-off, planeringsdag eller för att uppfylla arbetsgivarens krav på beredskap. De vill snabbt förstå vad de får, hur lång tid det tar och hur de bokar.

## Product Purpose

Livrustning (Nice To Be Alive AB) utbildar i hjärt-lungräddning (HLR) med hjärtstartare, första hjälpen och brand, och säljer sedan 2026-11-19 färdiga hjärtstartarpaket. Sajtens jobb: få företag att höra av sig för offert. Framgång = fler förfrågningar till info@nicetobealive.se via "Begär offert" och "Kontakta oss".

## Positioning

- Hela personalen utbildad på kort tid: eHLR-Event (2 h, obegränsat antal deltagare) och Säkerhetsdag (4 h, stationsupplägg brand + HLR + första hjälpen).
- Sveriges nöjdaste kursdeltagare enligt Reco.se, fem år i rad (Reco-märket "Rekommenderat 5 år i rad").
- Vi kommer till er, datum enligt era önskemål.

## Operating Context

- Kunden mejlar för offert. "Kontakta oss" öppnar mejlprogrammet (mailto) med förifylld ämnesrad. "Begär offert" leder till /offert, ett formulär (företagsnamn, namn, antal anställda, telefon, mejl) som öppnar mejlprogrammet med uppgifterna ifyllda. Ingen server: byts mot riktigt utskick först när en mejltjänst är kopplad.
- Pris lämnas via offert baserat på antal deltagare. Enda priserna på sajten är instruktörsutbildningarna (kundens underlag 2026-11-19).

## Capabilities and Constraints

Tjänster (källa: kundens två PDF:er 2026-09-18 och nuvarande livrustning.se):
- **Säkerhetsdag, 4 timmar**: fyra stationer (brand teori, brand praktik med släckövning inomhus, HLR med hjärtstartare, första hjälpen), deltagarna i fyra grupper som roterar, 4 × 45 min pass, fika 20 min. En certifierad instruktör per station. Hos kund.
- **eHLR-Event, 2 timmar**: gemensam start 50 min på storskärm med två instruktörer (eHLR-metoden, kunskapsfrågor), praktisk träning i grupper 2 × 25 min (HLR/hjärtstartare på dockor med LED-feedback, samt luftvägsstopp och medvetande/andning), avslutning 10 min. Digitalt slutprov via e-post efteråt, personligt utbildningsintyg + samlingsintyg till företaget. Obegränsat antal deltagare.
- **eHLR® och eFörstaHjälpen**: digitalt lärande + praktisk träning via LED-docka och träningshjärtstartare, ett års full arbetsplatsaccess för repetition. Låg kostnad, individuellt eller i grupp, flera språk, klimatsmart.
- **Traditionella kurser på plats**: max 12 personer för HLR och första hjälpen, 20 för brand. Följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.
- **Hjärtsäker zon (SS 280000)**: Livrustning hjälper med utbildning, rutiner, placering/skyltning och registrering.
- **Köp hjärtstartare** (nytt 2026-11-19, ersätter beskedet från 2026-09-18 om att ingen hårdvara säljs): Primedic Y och Primedic MyPAD i fyra paket (kontor, utomhus, hemma, Spanien) med skylt, rescue-kit och digital utbildning. "10 års garanti" är kundens egen uppgift om Primedic. Data i `src/lib/hjartstartare.ts`.
- **eHLR-Familj**: digital utbildning för hushållet, licens i 3 månader, betalas med Swish. Köplänk saknas ännu (knappen öppnar mejl).
- **Instruktörsutbildningar** i samarbete med Brandfast AB: Vuxen-HLR 3 900 kr, Barn-HLR 3 900 kr, Första hjälpen 4 900 kr, Huvudinstruktör pris vid förfrågan (exkl. moms).

Kontakt (kundens underlag 2026-11-19): Nice To Be Alive AB, Katarina Bangata 26, 116 39 Stockholm · 070-733 32 54 (tel:+46707333254) · info@nicetobealive.se · org.nr 559408-6547. Tidigare uppgifter (Livrustning AB, Täfteå, kontakt@livrustning.se) är utbytta. Verksamhet i Stockholm, Umeå och Nerja (Spanien), utbildar över hela landet.

## Brand Commitments

- Namn: Livrustning. Slogan: "Kunskap för säkerhets skull". Logotyp: magenta/röd springande figur + ordmärke med EKG-linje.
- Reco-märket ska finnas på EXAKT ett ställe, stort nog att faktiskt läsas (användarens krav).
- Ton: enkelt, konkret, tydligt. Mindre text, mer mening, catchiga rubriker.

## Evidence on Hand

- Kursfoton från Livrustnings egen Facebooksida (riktiga utbildningstillfällen 2019-2022).
- Reco.se: Sveriges nöjdaste kursdeltagare, "Rekommenderat 5 år i rad". Över 30 års erfarenhet, cirka 2 000 utbildade per år (nuvarande sajt).
- 100 % nöjdhetsgaranti (nuvarande sajt).
- Kundlista enligt kundens underlag 2026-11-19: Handelsbanken, Atlas Copco, ATEA, Fastighetsbyrån, Svenska kyrkan, Hitachi, Stockholms stad, DB Schenker, Sturebadet, Folkbildningsrådet, Itrim. Kunden vill ha loggor; namnen står i text tills loggfilerna finns.
- Inga kundcitat/omdömen i text finns - hitta inte på några.

## Product Principles

1. Företagskunden ska förstå erbjudandet på fem sekunder: hela personalen, 2 eller 4 timmar, vi kommer till er.
2. Varje sida slutar i samma handling: mejla för offert.
3. Bevis före påståenden: riktiga kursbilder, Reco-märket, konkreta scheman.
4. Hellre en tydlig mening än tre allmänna.
