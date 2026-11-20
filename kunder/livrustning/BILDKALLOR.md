# Bildkällor - Livrustning

Kursfotona kommer från Livrustning AB:s egna kanaler och hämtades 2026-09-18 på uppdrag av kunden. Sedan 2026-11-19 finns också bilder som kunden själv levererat (se tabellen); flera av dem är miljö- och produktbilder som kunden tagit fram, och de används som de är. Originalen ligger i `bilder/`, de färdiga webp-filerna i `src/bilder/` (skapas med `npm run bilder`). Exakta källänkar finns i `scripts/bildkallor.json`.

| Fil i src/bilder | Källa |
|---|---|
| grupp-dockor, kurs-kontor, hjartstartare-par, brand-slackare, hjartstartare-grupp, skola-hjartstartare, hlr-par, hlr-ovning, hlr-hjartstartare-kontor, grupp-genomgang, instruktor-klass, instruktor-portratt, instruktor-skap | Livrustnings Facebooksida, kursfoton 2019-2022 |
| logga-ljus-botten, logga-mork-botten, src/app/icon.png, src/app/apple-icon.png | Loggan på gamla livrustning.se (ljus variant omfärgad till bläckfärg) |
| traning-pa-plats-1, traning-pa-plats-2 | Kundens egna kursfoton, levererade 2026-11-19 ("Träning på plats 1/2", 640 px breda: visas därför små). Graderade som övriga kursfoton |
| sakerhetsdag-kollage, ehlr-event-sal, instruktorsutbildning, hjartstartare-i-hand, hjartstartare-hemma, hjartstartare-spanien, hjartstartarpaket-kontor | Levererade av kunden 2026-11-19. Graderas inte (skyltar och hjärtstartare ska ha rätt färg), bara skalning och webp |
| johnny-sundin, peter-jonsson | Porträtten ur kundens underlag (PDF 2026-11-19), 291 px breda: visas små |
| kunder/* (elva kundloggor) | Nio från nicetobealive.se (kundens egen sajt), Svenska kyrkan och Folkbildningsrådet som SVG från deras egna webbplatser, 2026-11-20. Egna färger; den vita bakgrunden görs genomskinlig i `scripts/bilder.mjs`. Folkbildningsrådets vita SVG får deras vinröda #980048 |
| reco-5-ar-i-rad | Reco-märket "Rekommenderat 5 år i rad" från gamla livrustning.se, frilagt längs cirkeln |

Graderingen (samma på alla foton, se `scripts/bilder.mjs`): färgsticket neutraliseras per bild (gråvärld, högst ±12 %), sedan mättnad 0,72, lyfta skuggor, matt svärta i bläckfärg och 14 % magenta i mjukt ljus. Byt alltid filnamn när ett motiv byts, skriv aldrig över samma sökväg på en publicerad sajt (bilder cachas per URL).

**Att stämma av med Livrustning:** att personerna på kursfotona är okej med att synas på hemsidan (bilderna är redan publicerade på Livrustnings Facebook).

**Saknas från kunden (2026-11-19):** bild på hjärtstartarpaket utomhus, nya bilder till sidan eHLR och eFörstaHjälpen (meningen i underlaget är avklippt), en andra hemmabild till Hjärtstartarpaket hemma samt kundloggorna till startsidan (namnen står i text tills filerna finns).
