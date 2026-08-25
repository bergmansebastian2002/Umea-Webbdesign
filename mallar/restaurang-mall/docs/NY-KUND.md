# Checklista: ny restaurangkund från mallen

Följ listan uppifrån och ner. En van användare klarar steg 1-6 på under en timme
(exklusive att vänta på bilder och texter från kunden).

## 0. Samla in från kunden

- [ ] Restaurangens namn, slogan och en kort beskrivning
- [ ] Telefon, e-post, gatuadress
- [ ] Öppettider (och avvikande dagar, t.ex. röda dagar)
- [ ] Länk till bokningssystem (Caspeco, Bokabord, OpenTable ...) - eller besked att bokning sker per telefon
- [ ] Menyn med priser
- [ ] 6-10 bra bilder (mat, matsal, bar, entré) + en bred "hjältebild"
- [ ] Länkar till Facebook/Instagram
- [ ] Önskad känsla: färger? klassiskt eller modernt?

## 1. Kopiera mallen

```bash
cp -r mallar/restaurang-mall kunder/<kundnamn>
cd kunder/<kundnamn>
npm install
```

Byt även `"name"` i `package.json` till kundens namn.

## 2. Fyll i `config/restaurang.ts`

Gå igenom filen uppifrån och ner - varje fält är kommenterat. Viktigast:

- [ ] `namn`, `slogan`, `kortBeskrivning`, `omOssStycken`
- [ ] `sajtUrl` - kundens riktiga domän
- [ ] `kontakt` - telefon i BÅDA formaten ("090-..." och "+4690...")
- [ ] `kontakt.latitud/longitud` - högerklicka på platsen i Google Maps och klicka på siffrorna
- [ ] `bokning.lank` - kundens bokningslänk (eller `aktiv: false`)
- [ ] `oppettider` + `specialdagar`
- [ ] `design.farger` - kolla kontrast på webaim.org/resources/contrastchecker
- [ ] `seo.stad`, `seo.sokord`, `seo.kokstyper`, `seo.prisniva`

## 3. Lägg in menyn i `content/meny.ts`

Byt ut exempelrätterna. Behåll strukturen - `id` för varje sektion ska vara
små bokstäver utan åäö (t.ex. `"forratter"`).

## 4. Byt bilder i `public/bilder/`

- [ ] `hero.png` - liggande, minst 1920 px bred, gärna mörk/stämningsfull
- [ ] `om-oss.png` - stående eller kvadratisk
- [ ] `delning.png` - exakt 1200 x 630 px (visas vid delning på Facebook m.m.)
- [ ] `galleri/` - byt ut alla, uppdatera `bilder.galleri` i config med rätt filnamn och beskrivande alt-texter på svenska

Tips: komprimera bilder på squoosh.app innan uppladdning (mål: under 400 kB per bild).

## 5. Välj typsnitt

Öppna `src/lib/typsnitt/index.ts` och byt sökvägen på exportraden:
`klassisk`, `modern`, `elegant` eller `varm`.

## 6. Testa lokalt

```bash
npm run dev
```

- [ ] Alla sidor på mobilbredd (öppna devtools, växla till mobil)
- [ ] "Boka bord" öppnar rätt bokningssida
- [ ] Kartan visar rätt plats
- [ ] Öppet nu-statusen stämmer med klockan
- [ ] `npm run build` går igenom utan fel

## 7. Publicera

1. Skapa ett nytt GitHub-repo för kunden och pusha.
2. Importera repot i [Vercel](https://vercel.com) - klart på ett par minuter.
3. Sätt miljövariabler i Vercel (se `.env.example`):
   - `NEXT_PUBLIC_SAJT_URL` = kundens domän
   - `RESEND_API_KEY`, `KONTAKT_AVSANDARE`, `KONTAKT_MOTTAGARE` för kontaktformuläret
4. Peka kundens domän till Vercel (Vercel visar exakt vilka DNS-poster som behövs).

## 8. Efter lansering - lokal SEO

- [ ] Verifiera sajten i [Google Search Console](https://search.google.com/search-console) och skicka in `/sitemap.xml`
- [ ] Skapa/uppdatera kundens **Google Företagsprofil** (Google Business Profile) och länka till sajten - detta är det enskilt viktigaste för lokala sökningar
- [ ] Testa strukturerad data: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Testa hastighet: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Be kunden länka till sajten från sin Facebook/Instagram
