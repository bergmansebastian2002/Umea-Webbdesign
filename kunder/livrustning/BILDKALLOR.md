# Bildkällor - Livrustning

Alla bilder kommer från Livrustning AB:s egna kanaler och hämtades 2026-09-18 på uppdrag av kunden. Inga stockbilder och inga AI-genererade bilder används. Originalen ligger i `bilder/`, de färdiga webp-filerna i `src/bilder/` (skapas med `npm run bilder`). Exakta källänkar finns i `scripts/bildkallor.json`.

| Fil i src/bilder | Källa |
|---|---|
| grupp-dockor, kurs-kontor, hjartstartare-par, brand-slackare, hjartstartare-grupp, skola-hjartstartare, hlr-par, hlr-ovning, hlr-hjartstartare-kontor, grupp-genomgang, instruktor-klass, instruktor-portratt, instruktor-skap | Livrustnings Facebooksida, kursfoton 2019-2022 |
| logga-ljus-botten, logga-mork-botten, src/app/icon.png, src/app/apple-icon.png | Loggan på gamla livrustning.se (ljus variant omfärgad till bläckfärg) |
| reco-5-ar-i-rad | Reco-märket "Rekommenderat 5 år i rad" från gamla livrustning.se, frilagt längs cirkeln |

Graderingen (samma på alla foton, se `scripts/bilder.mjs`): färgsticket neutraliseras per bild (gråvärld, högst ±12 %), sedan mättnad 0,72, lyfta skuggor, matt svärta i bläckfärg och 14 % magenta i mjukt ljus. Byt alltid filnamn när ett motiv byts, skriv aldrig över samma sökväg på en publicerad sajt (bilder cachas per URL).

**Att stämma av med Livrustning:** att personerna på kursfotona är okej med att synas på hemsidan (bilderna är redan publicerade på Livrustnings Facebook).
