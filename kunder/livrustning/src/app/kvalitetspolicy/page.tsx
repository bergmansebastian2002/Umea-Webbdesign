import Policysida from "@/components/Policysida";
import { metadataFor } from "@/lib/seo";

export const metadata = metadataFor({
  titel: "Kvalitetspolicy",
  beskrivning: "Livrustning AB:s kvalitetspolicy, en del av företagets systematiska arbetsmiljöarbete.",
  sokvag: "/kvalitetspolicy",
});

// Från gamla livrustning.se (2026-09-18). Ledet om att utrusta kunder med hjärtstartare
// är borttaget: Livrustning säljer inte fysiska hjärtstartare (besked 2026-09-18). Stäm av med kunden.
export default function Kvalitetspolicy() {
  return (
    <Policysida rubrik="Kvalitetspolicy" ingress="Ingår i Livrustning AB:s systematiska arbetsmiljöarbete.">
      <h2>Livrustning AB ska</h2>
      <ul>
        <li>Leverera kundanpassade utbildningar inom HLR och Första Hjälpen.</li>
        <li>Arbeta målinriktat och systematiskt med ständiga förbättringar för att öka kundtillfredsställelse och kundsäkerhet.</li>
        <li>Följa aktuella lagar, krav och utveckling som rör vår verksamhet.</li>
        <li>Arbeta mot tydliga mätbara kvalitetsmål som löpande följs upp.</li>
        <li>
          Arbeta i enlighet med Livrustnings riktlinjer för etik och kvalitet, de yrkesetiska riktlinjerna samt med
          beaktande av vår kundpolicy.
        </li>
        <li>Arbeta för att ständigt förbättra effektiviteten i ledningssystemet.</li>
        <li>
          Bibehålla att ha Sveriges nöjdaste kursdeltagare i HLR och Första Hjälpen enligt den största oberoende
          rekommendationssajten Reco.se (i jämförelse med de företag som utbildar mest).
        </li>
        <li>Visa respekt, engagemang, omtanke och intresse i mötet med kund.</li>
        <li>Sträva efter att överträffa kunds förväntan.</li>
      </ul>
    </Policysida>
  );
}
