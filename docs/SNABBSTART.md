# SNABBSTART - från noll till publicerad kundsida

Skriven för dig som har bråttom. Följ stegen i ordning; hoppa inte.

## Förutsättningar (engångssetup)

- Node.js 20+ och npm
- Konto på [vercel.com](https://vercel.com) kopplat till GitHub-repot
- Konto på [resend.com](https://resend.com) för kontaktformulärets e-post

## Så fungerar arkitekturen (30 sekunder)

**En kodbas, många kunder.** Varje kund är en mapp i
`mallar/restaurang-mall/content/<slug>/` med config, meny och bilder.
Vilken kund som byggs styrs av miljövariabeln `NEXT_PUBLIC_KUND`.
Varje kund = ett eget Vercel-projekt mot **samma repo** med olika värde
på variabeln. Demokunden `bjorken` byggs när variabeln saknas.

## 1. Skapa kunden (5 min)

```bash
cd mallar/restaurang-mall
npm install
npm run ny-kund
```

Svara på frågorna. Skriptet skapar `content/<slug>/`, registrerar kunden
och skriver ut en checklista.

## 2. Fyll i innehållet (30-45 min)

1. **Config**: öppna `content/<slug>/config.ts` - koordinater, öppettider,
   texter, sociala länkar, sökord. Detaljer: [ANPASSNING.md](ANPASSNING.md)
2. **Meny**: `content/<slug>/meny.json`
3. **Bilder**: lägg original i `content/<slug>/bilder/` (+ `galleri/`),
   fyll i `BILDRATTIGHETER.md` (se [bildinsamling.md](bildinsamling.md)), kör:
   ```bash
   npm run bilder -- <slug>
   ```

## 3. Testa lokalt (10 min)

Skapa `.env.local` med `NEXT_PUBLIC_KUND=<slug>` och kör:

```bash
npm run dev
```

Gå igenom alla sidor i mobilbredd. Kör sedan:

```bash
npm run build
```

Bygget ska gå igenom utan fel.

## 4. Pusha och skapa Vercel-projektet (10 min)

1. Committa på `development`, merga till `main` när allt är klart.
2. I Vercel: **Add New Project** -> importera repot.
3. **Root Directory**: `mallar/restaurang-mall`
4. **Environment Variables**:
   | Variabel | Värde |
   |---|---|
   | `NEXT_PUBLIC_KUND` | kundens slug |
   | `NEXT_PUBLIC_SAJT_URL` | `https://www.kundensdoman.se` |
   | `RESEND_API_KEY` | från resend.com |
   | `KONTAKT_AVSANDARE` | `hemsida@kundensdoman.se` (verifierad i Resend) |
   | `KONTAKT_MOTTAGARE` | kundens e-post |
5. Deploy. Varje ny push bygger om alla kundprojekt (de bygger samma kod
   med olika innehåll).

## 5. Domän (10 min + DNS-väntan)

I Vercel-projektet: **Settings -> Domains** -> lägg till kundens domän.
Vercel visar exakt vilka DNS-poster kunden (eller du) ska sätta hos
domänleverantören. Både `kundensdoman.se` och `www.` - Vercel ordnar
omdirigering och HTTPS själv.

## 6. Före lansering

Gå igenom [LANSERINGSCHECKLISTA.md](LANSERINGSCHECKLISTA.md) - hela listan.

## 7. Efter lansering

[seo-checklista.md](seo-checklista.md) - Google Företagsprofil och
Search Console är viktigast. Boka in det samma vecka.
