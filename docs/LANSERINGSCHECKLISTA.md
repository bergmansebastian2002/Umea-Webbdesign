# LANSERINGSCHECKLISTA

Allt ska vara ikryssat innan kundens domän pekas mot sajten.

## Innehåll

- [ ] Alla texter korrekturlästa av kunden (namn, priser, öppettider)
- [ ] Org.nr ifyllt i config när kunden har ett (visas i integritetspolicyn)
- [ ] Telefonnummer testat: klicka på det i mobilen - ringer det rätt?
- [ ] `telefonLank` i +46-format och identisk med det visade numret
- [ ] E-postadressen tar emot post
- [ ] Menyn stämmer med kundens senaste version, med priser
- [ ] Allergener och märkningar ifyllda där kunden vill ha dem
- [ ] Öppettider + avvikande dagar (kolla kommande röda dagar!)
- [ ] "Öppet nu"-statusen stämmer med klockan just nu

## Bokning

- [ ] Bokningslänken öppnar kundens riktiga bokningssystem
- [ ] Bokning avstängd (`aktiv: false`) om kunden bara tar telefon - och
      då visas "Ring och boka" korrekt

## Bilder

- [ ] Alla platshållar-/demobilder utbytta mot kundens egna
- [ ] `BILDRATTIGHETER.md` komplett ifylld - varje bild har dokumenterat
      godkännande
- [ ] `npm run bilder -- <slug>` körd efter senaste bildbytet
- [ ] Delningsbilden ser bra ut: testa på https://www.opengraph.xyz

## Teknik

- [ ] `npm run build` och `npm run lint` gröna
- [ ] Alla sidor testade på mobil (320 px), surfplatta och dator -
      ingen vågrät rullning
- [ ] Kontaktformuläret skickar och mejlet landar hos kunden
      (Resend-nycklarna satta i Vercel)
- [ ] 404-sidan visas för påhittad adress
- [ ] Karta visar rätt plats, vägbeskrivningslänken fungerar
- [ ] Lighthouse mobil: Performance/Accessibility/Best Practices >= 95, SEO 100
- [ ] Samtyckesbannern visas vid första besök; analys laddas först efter "Tillåt"

## Vercel

- [ ] `NEXT_PUBLIC_KUND` = kundens slug
- [ ] `NEXT_PUBLIC_SAJT_URL` = https://www.kundensdoman.se (rätt domän!)
- [ ] `RESEND_API_KEY`, `KONTAKT_AVSANDARE`, `KONTAKT_MOTTAGARE` satta
- [ ] Domänen tillagd med fungerande HTTPS, www-omdirigering på plats

## Juridik

- [ ] Integritetspolicyn genomläst av kunden
- [ ] Kunden vet att meddelanden från formuläret raderas efter avslutat ärende

## Direkt efter lansering

- [ ] Google Företagsprofil uppdaterad med nya hemsidan (se seo-checklista.md)
- [ ] Sitemap inskickad i Search Console
- [ ] Rich results-test grönt
- [ ] Kundens sociala medier länkar till sajten
