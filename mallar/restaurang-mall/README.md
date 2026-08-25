# Restaurangmall - Umeå Webbdesign

Flerkunds-mall för restauranghemsidor: **Next.js 16, React 19,
Tailwind CSS 4**. En kodbas, en mapp per kund i `content/`, aktiv kund
väljs med `NEXT_PUBLIC_KUND`.

## Snabbkommandon

```bash
npm run dev              # demokunden (bjorken) på localhost:3000
npm run ny-kund          # skapa och registrera en ny kund
npm run bilder -- <slug> # optimera kundens bilder (WebP + blur)
npm run build            # produktionsbygge
npm run lint             # ESLint
```

## Det här ingår

- Startsida med hero (bild eller video), valbara sektioner i valfri
  ordning: om oss, menyhöjdpunkter/smakprov, galleri, betyg, evenemang,
  boka-CTA, hitta hit
- Meny med filter (vegetariskt/veganskt/glutenfritt), allergener,
  populär-märkning och bildkopplade signaturrätter
- Öppet nu-status i realtid (midnattsstängning, röda dagar, svensk tidszon)
- Boka bord överallt: header, hero, sticky mobilfält, footer - externt
  bokningssystem eller telefonfallback
- Kontaktformulär via server action: Zod-validering, honungsfälla,
  takbegränsning, Resend
- Tre art directions (klassisk/nordisk/livlig) som sätter färger,
  typsnitt och karaktär - per kund, med valfria färgöverstyrningar
- SEO: svenska titlar, genererad delningsbild (next/og), sitemap,
  robots, schema.org Restaurant/Menu/BreadcrumbList med aggregateRating
- GDPR: samtyckesgrindad Vercel Analytics + klickspårning på boka/ring,
  integritetspolicysida från config
- Bildpipeline: WebP, blur-platshållare, dokumenterade bildrättigheter

## Dokumentation

Allt finns i [../../docs/](../../docs/):
[SNABBSTART](../../docs/SNABBSTART.md) ·
[ANPASSNING](../../docs/ANPASSNING.md) ·
[LANSERINGSCHECKLISTA](../../docs/LANSERINGSCHECKLISTA.md) ·
[bildinsamling](../../docs/bildinsamling.md) ·
[seo-checklista](../../docs/seo-checklista.md)
