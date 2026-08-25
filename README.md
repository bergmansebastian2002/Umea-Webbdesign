# Umeå Webbdesign

Moderna hemsidor åt lokala restauranger i Sverige. En kodbas - många
kundsajter.

## Struktur

```
mallar/restaurang-mall/     Appen (Next.js 16 + React 19 + Tailwind 4)
  content/<kund>/           EN MAPP PER KUND: config.ts, meny.json, bilder
  src/                      Komponenter och sidor (ändras aldrig per kund)
docs/                       All dokumentation
```

Aktiv kund väljs med miljövariabeln `NEXT_PUBLIC_KUND`. Varje kund får
ett eget Vercel-projekt mot samma repo. Demokunden **Restaurang Björken**
byggs när variabeln saknas - använd den som säljdemo.

## Kom igång

```bash
cd mallar/restaurang-mall
npm install
npm run dev        # demon på http://localhost:3000
```

## Ny kund

```bash
npm run ny-kund    # interaktiv guide - skapar och registrerar kunden
```

Sedan: [docs/SNABBSTART.md](docs/SNABBSTART.md)

## Dokumentation

| Dokument | När |
|---|---|
| [SNABBSTART.md](docs/SNABBSTART.md) | Ny kundsida, från noll till publicerad |
| [ANPASSNING.md](docs/ANPASSNING.md) | Exakt vilka rader du byter per kund |
| [LANSERINGSCHECKLISTA.md](docs/LANSERINGSCHECKLISTA.md) | Innan sajten går live |
| [bildinsamling.md](docs/bildinsamling.md) | Bilder från kunden + rättigheter |
| [seo-checklista.md](docs/seo-checklista.md) | Efter lansering: Google m.m. |

## Arbetsflöde

| Branch | Används till |
|---|---|
| `feature/*` | Allt arbete - PR mot `development` |
| `development` | Samlad, testad utveckling |
| `main` | Endast färdig, godkänd produkt |

Krav före merge till `development`: `npm run build` och `npm run lint`
gröna, inga hårdkodade kunduppgifter utanför `content/`.
