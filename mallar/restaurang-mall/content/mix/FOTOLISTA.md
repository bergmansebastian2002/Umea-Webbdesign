# Fotolista - Restaurang Mix

Önskelista till kunden (eller fotografen) inför lanseringen. Logotypen är
kundens egen. Buffé-, kvälls-, avhämtnings-, catering- och pastabilderna är
stockfoton från kundens gamla sajt (licens ej bekräftad, se
BILDRATTIGHETER.md). Övriga galleribilder är platshållare från Unsplash.
Målet är att ersätta allt med riktiga foton från Mix på Björnvägen 11.

Prioritetsordning:

1. **Lunchbuffén** - det kunden vill synas med. Buffébordet nyfyllt, dels
   i helbild (liggande, minst 1920 px bred - dagens hero är bara 1000 px),
   dels närbilder på grytor och salladsbuffén. Ersätter
   `bilder/hero-buffe.jpg` och `bilder/evenemang/lunchbuffe.jpg`.
2. **Avhämtning** - nuvarande bild är troligen en olicensierad
   stockförhandsvisning. Foto på en färdig hämtbeställning i Mix egna
   förpackningar. Ersätter `bilder/evenemang/avhamtning.jpg`.
3. **Matsalen och personalen** - interiör med dagsljus, gärna med gäster
   (godkännande krävs) eller personal som serverar. Ersätter
   `bilder/om-oss-servering.jpg`.
4. **Kvällsmenyn och catering** - en grillrätt från Mellanöstern-menyn och
   ett uppdukat cateringbord. Ersätter `bilder/evenemang/kvallsmeny.jpg` och
   `bilder/evenemang/catering.jpg` (den senare är bara 512 px bred idag).
5. **Signaturrätter** - närbilder på riktiga portioner, en per rad i
   galleriet: pizza (gärna Mix special eller Husets special), grillfat,
   pasta, plankstek, hamburgare, sallad.
6. **Logotypen i vektor** - PNG:n från gamla sajten fungerar bra, men be om
   originalfilen (AI/SVG/PDF) för tryck och skyltar om den finns.

Byt motiv under ett NYTT filnamn (t.ex. `hero-buffe-2026.jpg`) och uppdatera
sökvägen i config.ts. Bildoptimeraren och besökarnas webbläsare cachar per
sökväg, så en ny bild under samma namn kan visa den gamla i flera timmar.

Tips vid fotografering: fotografera i dagsljus eller nära fönster, håll
bakgrunden ren, och ta bilderna i liggande format där det går. Mobilkamera
räcker gott - vi efterbehandlar och optimerar (`npm run bilder -- mix`).
