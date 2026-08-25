# SEO-checklista - lokala sökningar i Sverige

Gå igenom listan för varje kund, i ordning. De två första punkterna ger
störst effekt för en lokal restaurang.

## 1. Google Företagsprofil (Google Business Profile)

Det enskilt viktigaste för "restaurang + ort"-sökningar och Google Maps.

- [ ] Skapa/gör anspråk på profilen: https://business.google.com
- [ ] Verifiera (vykort, telefon eller video - Google väljer)
- [ ] Fyll i ALLT: kategori ("Restaurang" + kökstyp), öppettider, telefon,
      hemsida (kundens nya domän), attribut (uteservering, vegetariskt...)
- [ ] Ladda upp 5-10 bilder (samma godkända bilder som på sajten)
- [ ] Lägg in bokningslänken under "Bokningar"
- [ ] Be kunden svara på recensioner - aktivitet stärker rankingen

## 2. NAP-konsistens (Namn, Adress, Telefon)

Google jämför uppgifterna på sajten, Företagsprofilen och andra kataloger.
De måste vara IDENTISKA - samma stavning, samma format.

- [ ] Sajten (config), Google Företagsprofil, Facebook/Instagram-bio,
      hitta.se, eniro.se visar exakt samma namn/adress/telefon
- [ ] Mallen skriver redan ut adressen med schema.org-markup i sidfoten
      och i strukturerad data - kontrollera att config stämmer med
      Bolagsverket/Företagsprofilen

## 3. Google Search Console

- [ ] Lägg till egendomen: https://search.google.com/search-console
      (välj "Domän" och verifiera via DNS hos domänleverantören, eller
      sätt NEXT_PUBLIC_GOOGLE_VERIFIERING i Vercel och deploya om)
- [ ] Skicka in sitemapen: `https://<domän>/sitemap.xml`
- [ ] Begär indexering av startsidan under "Granska URL"
- [ ] Kolla tillbaka efter en vecka: täckning, sökfrågor, klick

## 4. Verifiera strukturerad data

Mallen genererar Restaurant-, Menu- och BreadcrumbList-schema automatiskt.

- [ ] Testa sajten på https://search.google.com/test/rich-results -
      "Restaurant" ska hittas utan fel
- [ ] Kontrollera att öppettider, prisklass och betyg ser rätt ut

## 5. Sökord och innehåll

- [ ] `seo.sokord` i kundens config speglar hur folk faktiskt söker:
      "[kökstyp] restaurang [ort]", "boka bord [ort]", "lunch [ort]",
      "julbord [ort]" inför säsong
- [ ] Ortnamnet förekommer naturligt i rubriker och texter (mallen gör
      detta i hero, om oss och hitta hit - behåll det när texter skrivs om)
- [ ] Menysidan har riktiga rätter med beskrivningar (Google läser dem)

## 6. Prestanda och teknik (redan löst i mallen, verifiera ändå)

- [ ] https://pagespeed.web.dev - mobil: alla kärnvärden gröna
- [ ] Delningsbild ser rätt ut: klistra in domänen på
      https://www.opengraph.xyz eller dela i en testchatt
- [ ] `robots.txt` och `sitemap.xml` svarar på domänen

## 7. Länkar utifrån

- [ ] Kundens Facebook/Instagram-bio länkar till nya sajten
- [ ] Kommunens/besöksnäringens företagsregister (t.ex. visitumea.se)
- [ ] Eventuella branschsajter (White Guide, Thatsup, lokaltidningens
      restaurangguider)
