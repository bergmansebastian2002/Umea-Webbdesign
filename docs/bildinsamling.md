# Bildinsamling - checklista att skicka till kunden

Kopiera texten nedan in i ett mejl till kunden när projektet startar.
Bilderna är det som avgör om sidan känns exklusiv - be hellre om för många
än för få.

---

Hej!

För att din nya hemsida ska bli riktigt bra behöver vi bilder. Så här önskar
vi dem:

## Motiv vi behöver

1. **En bred "hjältebild"** - matsalen eller en stämningsbild, gärna i
   kvällsljus. Den ligger stort överst på startsidan.
2. **3-4 maträtter** - era signaturrätter, fotade snett uppifrån eller från
   sidan i dagsljus.
3. **Interiör** - matsalen och baren, gärna med dukade bord.
4. **Personal** - kocken eller teamet i arbete (skapar förtroende).
5. **Exteriör** - entrén/fasaden, så gästerna känner igen sig.

## Tekniska krav

- **Liggande format** på hjältebilden och de flesta övriga.
- **Minst 2000 pixlar bred** (mobilfoton från senare år räcker gott).
- Skicka **originalfiler**, inte skärmdumpar eller bilder från Facebook -
  de är för hårt komprimerade.
- Skicka gärna via WeTransfer, Google Drive eller liknande.

## Viktigt om rättigheter

Vi får bara använda bilder som ni har rätt till. Bilder tagna av en anlitad
fotograf ägs oftast av fotografen, även om de föreställer er restaurang.

**Om en fotograf har tagit bilderna:** be fotografen bekräfta skriftligt
(mejl räcker) att bilderna får användas på er nya hemsida. Förslag på
formulering ni kan skicka till fotografen:

> Hej! Vi bygger en ny hemsida för [restaurangens namn] och vill använda
> [antal] bilder du fotograferat åt oss ([beskriv vilka]). Kan du bekräfta
> att vi får använda dem på hemsidan [domän] utan tidsbegränsning?
> Vi anger gärna ditt namn som fotograf om du önskar.

Vidarebefordra fotografens svar till oss, så dokumenterar vi det.

Bilder ni själva tagit med egen mobil/kamera är fria att använda - skriv
bara i mejlet vilka det gäller.

Tack!

---

## Intern hantering (för dig, inte kunden)

1. Lägg originalen i `content/<kund>/bilder/` (undermappen `galleri/` för galleribilder).
2. Fyll i `content/<kund>/BILDRATTIGHETER.md` - en rad per bild, med källa,
   fotograf och hänvisning till godkännandemejlet.
3. Kör `npm run bilder -- <kund>` - konverterar till WebP, genererar
   blur-platshållare och skriver `bilddata.json`.
4. Uppdatera sökvägarna i kundens `config.ts` (ändelsen blir `.webp`).
5. Platshållarbilder (demons genererade bilder eller Unsplash-bilder) får
   ALDRIG ligga kvar på en lanserad kundsajt.
