# Din Frisör

Ensidessajt för Din Frisör - drop in-frisör vid Järnvägstorget 17 A i Umeå.
Egen Next 16-app (bygger inte på restaurangmallen), samma modell som
`kunder/livrustning`.

**OBS: priserna på sajten är exempelpriser.** Vad som är bekräftat och vad som
måste stämmas av med salongen står i [FAKTA.md](FAKTA.md).

## Kommandon

```bash
npm install
npm run dev        # http://localhost:3004
npm run build
npm run lint
npm run typecheck
```

## Design

- Identiteten kommer från skylten på fasaden: "Din" i rosa skript + FRISÖR i
  spärrade versaler på grönsvart plåt (salongens egna FB-foton).
- Typsnitt: Pacifico (endast skriptorden) + Schibsted Grotesk (allt annat),
  självhostade via next/font.
- Signaturelement: prisskylten i hjälteytan - en mörk tavla som gatuprataren
  utanför salongen, med intonande rader.
- Ingen JavaScript-interaktivitet, inga kakor, inga formulär: helt statisk.

## Deploy

Eget Vercel-projekt (team snajp-support), inte git-kopplat - deploya med
`vercel deploy --prod` från den här katalogen. Sajten är noindexad tills
`INDEXERA=ja` sätts i Vercel vid lansering.
