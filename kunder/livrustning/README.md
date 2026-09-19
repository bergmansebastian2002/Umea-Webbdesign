# Livrustning - ny hemsida

Ny version av livrustning.se (Livrustning AB: HLR, första hjälpen och brand). Egen Next.js 16-app, helt statisk, samma stack som byråns övriga sajter. Designriktning: **EKG-remsan**, där loggans EKG-linje löper genom sidan på rosa EKG-papper.

## Kom igång

```bash
npm install
npm run dev      # http://localhost:3002
npm run build
npm run lint
npm run bilder   # tonar om bilder/ -> src/bilder/ (behövs bara när bilder byts)
```

Från repo-roten finns även startkonfigurationen `livrustning` i `.claude/launch.json`.

## Var saker finns

- `src/lib/site.ts`: alla fakta (kontakt, utbildningar, mejlämnen, kundnamn). Ändra inga siffror utan kundens ok.
- `src/app/`: en mapp per sida. Startsida, Utbildningar (+4 undersidor), Så går det till, Hjärtsäker zon, Om oss, Kontakt och tre policysidor.
- `src/components/Ekg.tsx`: EKG-kurvan som ritas fram och slutar i Kontakta oss-knappen.
- `src/app/globals.css`: färger och EKG-papperet.
- `PRODUCT.md`: produktfakta och vad som inte får påstås. `BILDKALLOR.md`: var varje bild kommer ifrån.

Kontakta oss öppnar besökarens mejlprogram (mailto) med förifylld ämnesrad och en kort mall, precis som gamla sajten. Det finns inga formulär och inga kakor.

## Att stämma av med Livrustning före publicering

1. **Kundnamnen** på startsidan (Handelsbanken, Svenska Filminstitutet, Spritmuseum, Armémuseum, Kraftringen, Tyska skolan) är hämtade ur deras egna Facebookinlägg. Det är ett förslag och kräver godkännande.
2. **Integritetspolicyn** är nyskriven för den nya sajten. Den gamla hade fel adress (Nacka) och nämnde "Musikbutikens webbplats".
3. **Kvalitets- och miljöpolicyn** är hämtade från gamla sajten, men leden om att utrusta kunder med CE-märkta hjärtstartare och att hjärtstartare levereras från generalagenten är borttagna, eftersom Livrustning inte säljer fysiska hjärtstartare. Stäm av att policyerna i övrigt stämmer.
4. **Köpvillkoren** (som handlade om webbutiken hjartstartarbutiken.com) följde inte med. `/kopia-pa-integritetspolicy` skickas vidare till /kontakt.
5. **Hjärtsäker zon**: all hårdvara och alla garantier är borttagna. Länken till PDF:en med standarden låg på gamla Wix-sajten och följde inte med.
6. **Reco-märket** visar "5 år i rad". Kontrollera att det fortfarande stämmer, liksom **100 % nöjdhetsgaranti** (står på gamla sajten).
7. Telefonlänken på gamla sajten ringde 08-97 22 47 fast texten visade 070-733 32 54. Här ringer den 070-numret.

## Driftsättning

Vercel-projektet `livrustning` (team snajp-support) deployas med CLI från den här mappen och är inte git-kopplat, som byråns kundsajter:

```bash
vercel deploy --prod --yes --scope snajp-support
```

Förhandsversionen är **inte sökbar**: `robots.txt` stänger ute sökmotorer och alla sidor har `noindex`. Vid lansering, när kunden godkänt innehållet och domänen livrustning.se pekats om från Wix, sätt miljövariabeln `INDEXERA=ja` i Vercel-projektet och deploya igen.
