# Fotolista - Ronyas Restaurang

Alla bilder på sajten är just nu **tydligt märkta platshållare**. Ingen
AI-genererad eller lånad bild ska föreställa restaurangen eller maten -
riktiga foton läggs in så snart de är tagna.

## Så byts en platshållare ut

1. Lägg det riktiga fotot i `content/ronyas/bilder/` med **samma filnamn**
   som platshållaren (t.ex. `galleri/mat-pizza.png` -> döp fotot till
   `galleri/mat-pizza.jpg`, ta bort png-platshållaren).
2. Kör `npm run bilder -- ronyas` (skapar WebP + blur-data).
3. Uppdatera bildens alt-text i `config.ts` så den beskriver det riktiga fotot.
4. Dokumentera rättigheterna i `BILDRATTIGHETER.md`.

## Foton som behöver tas

Högst prioritet först - det här är ordningen bilderna visas i.

| # | Fil | Motiv | Orientering | Minsta storlek |
|---|-----|-------|-------------|----------------|
| 1 | `hero.jpg` | Varm, aptitretande bild - t.ex. nygräddad pizza eller grillen i aktion. Bakgrund till sidhuvudet, mörk toning läggs på automatiskt | Liggande | 1920 × 1200 px |
| 2 | `galleri/mat-pizza.jpg` | Pizza i närbild (gärna Ronyas-pizzan) | Liggande | 1600 × 1067 px |
| 3 | `galleri/mat-grill.jpg` | Grillrätt i närbild (t.ex. grillmix eller adana kebab) | Liggande | 1600 × 1067 px |
| 4 | `galleri/mat-buffe.jpg` | Salladsbuffén/pizzabuffén, uppdukad | Stående | 1200 × 1600 px |
| 5 | `galleri/uteservering-1.jpg` | Uteserveringen sommartid, gärna med gäster | Liggande | 1600 × 1067 px |
| 6 | `galleri/uteservering-2.jpg` | Uteserveringen, närmare detalj | Stående | 1200 × 1600 px |
| 7 | `galleri/matsal-1.jpg` | Sittplatser och atmosfär inomhus | Liggande | 1600 × 1067 px |
| 8 | `galleri/matsal-2.jpg` | Detalj från matsalen (dukat bord e.d.) | Stående | 1200 × 1600 px |
| 9 | `galleri/kok.jpg` | Tillagning - pizzaugn eller grill | Liggande | 1600 × 1067 px |
| 10 | `om-oss.jpg` | Interiör eller personal, till "Om oss"-sektionen | Stående | 1600 × 2000 px |

Totalt: **10 foton** - 6 liggande, 4 stående. Fler matbilder än så är
alltid välkommet; galleriet byggs som en lista i `config.ts` och är enkelt
att utöka.

Tips till fotografen: dagsljus eller varmt restaurangljus, inga blixtfoton
rakt framifrån. Maten fotas nylagad, nära och snett ovanifrån.
