---
name: Livrustning
description: EKG-remsan. Loggans EKG-linje löper genom sajten på rosa EKG-papper och slutar i Kontakta oss.
colors:
  papper: "#fdf3f5"
  papper-djup: "#fae6ec"
  rut-fin: "#f7dbe3"
  rut-grov: "#efbccb"
  blaeck: "#17151a"
  grafit: "#4b4550"
  magenta: "#e30646"
  magenta-mork: "#c2043c"
  magenta-ljus: "#ff5c89"
  monitor: "#141116"
  monitor-linje: "#2c2630"
  monitor-text: "#f7eef2"
  monitor-dampad: "#bfb2ba"
  vit: "#ffffff"
typography:
  display:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 6.6vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Familjen Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
rounded:
  foto: "6px"
  kontakt: "12px"
  kort: "16px"
  knapp: "999px"
spacing:
  kant-mobil: "20px"
  kant-dator: "32px"
  sektion-mobil: "80px"
  sektion-dator: "112px"
components:
  button-primary:
    backgroundColor: "{colors.magenta}"
    textColor: "{colors.vit}"
    rounded: "{rounded.knapp}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.magenta-mork}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.blaeck}"
    rounded: "{rounded.knapp}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-secondary-hover:
    backgroundColor: "{colors.blaeck}"
    textColor: "{colors.papper}"
  text-link:
    textColor: "{colors.magenta-mork}"
  event-card:
    backgroundColor: "{colors.papper}"
    rounded: "{rounded.kort}"
  monitor-panel:
    backgroundColor: "{colors.monitor}"
    textColor: "{colors.monitor-text}"
    rounded: "{rounded.kort}"
---

# Design System: Livrustning

## Overview

**Creative North Star: "EKG-remsan"**

Sajten är en utskrift från en EKG-apparat. Ljusrosa papper med riktigt millimeterrutnät, svart skrivarbläck och en enda magenta kurva: loggans EKG-linje. Kurvan ritas fram i första vyn och i varje sidas avslutning, och dess sista slag landar alltid i Kontakta oss-knappen. Det är sajtens enda signatur och den ska inte spädas ut.

Tätheten är låg och rubrikerna tunga och korta. Det mörka monitorbandet är kontrasten till papperet: en plats för tidtabeller, fakta och en kurva som rör sig. Fotona är riktiga kursbilder från Livrustnings egna kanaler. Alla bilder graderas med samma tonkurva så att de ser ut som en serie.

Systemet avvisar branschstandarden för HLR-företag: stockhjärta i helbild, tre likadana tjänstekort och gröna bockar.

**Key Characteristics:**
- EKG-papper (1 mm fint och 5 mm grovt rutnät) bara i sidans ingång och i den avslutande uppmaningen.
- En magenta kurva som slutar i knappen, med en lugnt pulserande ring.
- Tunga grotesk-rubriker i Familjen Grotesk, siffror i bläck med tabulära siffror.
- Mörkt monitorband för schema och fakta.
- Riktiga, enhetligt graderade kursfoton med små hörn.

## Colors

En återhållsam palett: papper och bläck bär ytan, loggans magenta är reserverad för handling och hjärtslag.

### Primary
- **Loggans magenta** (`magenta`): knappar, EKG-kurvan och pulsringen. Inget annat.
- **Mörk magenta** (`magenta-mork`): textlänkar och knappens hovring på ljus botten (klarar 4,5:1 mot papperet).
- **Ljus magenta** (`magenta-ljus`): tider och stegnummer som text på monitorbotten, där vanlig magenta inte klarar kontrastkravet.

### Neutral
- **EKG-papper** (`papper`): sidans mark, sidhuvud och kort på vit botten.
- **Djupt papper** (`papper-djup`): band som behöver skilja sig från vitt, till exempel Reco-blocket och Så hjälper vi er.
- **Fint och grovt rutnät** (`rut-fin`, `rut-grov`): millimeterpapperets linjer. `rut-grov` används även som ljusaste steg i tidslinjer.
- **Skrivarbläck** (`blaeck`): all rubrik- och brödtext, stora siffror.
- **Grafit** (`grafit`): ingresser, sekundär text och ikoner.
- **Monitor** (`monitor`, `monitor-linje`, `monitor-text`, `monitor-dampad`): mörka band och sidfot; linjerna bara där en kurva finns.
- **Vitt** (`vit`): innehållsband mellan papperssektionerna.

### Named Rules
**The Heartbeat Rule.** Magenta betyder handling (knappar, länkar och deras pilar) eller hjärtslag (kurvan och slag-ikonen). Stora siffror, övriga ikoner och diagramstaplar sätts i bläck eller grafit, aldrig i magenta.

**The Paper Only Under The Trace Rule.** Rosa rutnät finns bara i sidans ingång (första vyn och sidrubriker) och i den avslutande uppmaningen där kurvan ritas. Monitorrutnät finns bara bakom en kurva. Övriga band har slät yta.

## Typography

**Display Font:** Familjen Grotesk (med ui-sans-serif, system-ui)
**Body Font:** Familjen Grotesk

**Character:** En svensk grotesk med egen karaktär i de fetaste snitten och lugn i brödtexten. Samma familj bär allt, och rang skapas med vikt och storlek.

### Hierarchy
- **Display** (700, clamp 2,9–5,75 rem, 0,95): startsidans H1, max två–tre rader.
- **Headline** (700, clamp 2,1–3,75 rem, 1,02): sektionsrubriker och undersidornas H1 (upp till 4,75 rem).
- **Title** (700, 1,75–2 rem): kortrubriker, steg och stationer.
- **Lead** (400, 1,25–1,5 rem, 1,625, grafit): ingress direkt under rubriker, max cirka 36 rem bred.
- **Body** (400, 1,0625 rem, 1,6): löptext, max 65–75 tecken per rad.
- **Label** (600, 0,875 rem, tabulära siffror): etiketter i snabbfakta, brödsmulor och sidfotsrubriker. Inga versaler, ingen spärrning.

### Named Rules
**The Short Headline Rule.** Rubriker är påståenden på en eller två korta rader ("Säker arbetsplats på 4 timmar."). Inga etiketter eller kickers ovanför rubriker.

## Layout

Innehållet ligger i en behållare på max 80 rem med 20 px kant på mobil och 32 px från lg. Sektionerna har 80 px luft på mobil och 112 px på dator, och växlar mellan papper, vitt, djupt papper och monitor så att varje band har en egen ton. Rutnätet är 12 kolumner. Text och bild delas oftast 7/5 eller 5/7, och listor läggs i en spalt med tunna linjer mellan raderna. På mobil staplas allt i en kolumn och snabbfakta går i två kolumner. Tidtabeller byter från två kolumner till en.

## Elevation & Depth

Nästan platt. Djup skapas med tonband (papper, vitt, monitor) och tunna linjer, inte med skuggor. Två skuggor finns:

### Shadow Vocabulary
- **Foto** (`box-shadow: 0 1px 2px rgb(23 21 26 / 0.06), 0 12px 32px -18px rgb(23 21 26 / 0.35)`): lyfter kursfoton en aning från papperet.
- **Primärknapp** (`box-shadow: 0 6px 18px -8px rgb(227 6 70 / 0.55)`): magenta glöd under Kontakta oss, starkare vid hovring.

## Shapes

Foton har små hörn (6 px) som en utskrift. Eventkort och monitorpaneler har 16 px, kontaktknapparnas rader 12 px, och knappar är piller. Linjer är 1 px i bläck på 10–15 % opacitet. Kurvan har rundade fogar och ändar.

## Components

### Buttons
- **Shape:** piller (999 px), höjd 3,25 rem (2,75 rem i sidhuvudet).
- **Primary:** magenta med vit text. Används för Kontakta oss, Be om offert och Mejla oss, och öppnar alltid mejlprogrammet med förifylld ämnesrad.
- **Hover / Focus:** mörkare magenta, 1 px lyft, starkare glöd. Fokus är en 2 px magenta ring med 3 px avstånd.
- **Secondary:** transparent med en bläckring på 1,5 px. Vid hovring fylls knappen med bläck och texten blir papper. Används för Facebook, Instagram och sekundära val.

### Cards / Containers
- **Eventkort:** papper, 16 px hörn, 1 px linje, foto överst i 3:2. Därunder en stor bläcksiffra (2 h / 4 h), rubrik, text och faktarader med tunna linjer. Hela kortet är klickbart.
- **Monitorpanel:** monitorsvart med rutnät och en EKG-kurva inuti, till exempel "3 min" på Hjärtsäker zon.

### Navigation
- **Sidhuvud:** sticky på papper, logga till vänster och menyn i mitten. Utbildningar har en rullgardin som öppnas vid hovring eller fokus. Telefon och Kontakta oss ligger till höger. Aktiv sida visas i mörk magenta.
- **Mobil:** menyknapp på 44 px som öppnar en helskärmspanel med stora länkar och underutbildningar indragna med en 1 px linje. Escape stänger och fokus återgår.

### EKG-kurvan (signatur)
Ritas i verklig pixelbredd med P-, QRS- och T-våg, och slagen behåller sin form i alla bredder. På smala skärmar gallras slag bort så att de inte trängs, och det sista slaget behålls. Kurvan ritas fram en gång med stroke-dashoffset (cirka 1,6 s, exponentiell ut-kurva) när den syns. Vid reduced motion visas den färdig. Vid knappen pulserar en ring var 2,4 s.

## Do's and Don'ts

### Do:
- **Do** låt varje sida sluta med kurvan som landar i en Kontakta oss-knapp.
- **Do** använd riktiga kursfoton genom `npm run bilder`, så att alla får samma gradering.
- **Do** sätt tider, siffror och tabeller med tabulära siffror.
- **Do** använd `magenta-ljus` för text på monitorbotten och `magenta-mork` för länkar på ljus botten.

### Don't:
- **Don't** använd magenta för siffror, listikoner eller dekor (The Heartbeat Rule).
- **Don't** lägg rutnät på innehållsband mitt på sidan.
- **Don't** använd stockbilder av hjärtan i händer, gröna bockar eller tre likadana tjänstekort.
- **Don't** visa Reco-märket mer än en gång på sajten.
- **Don't** sätt etiketter eller kickers ovanför rubriker.
