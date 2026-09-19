import Policysida from "@/components/Policysida";
import { metadataFor } from "@/lib/seo";

export const metadata = metadataFor({
  titel: "Miljöpolicy",
  beskrivning: "Livrustning AB:s miljöpolicy, en del av företagets systematiska arbetsmiljöarbete.",
  sokvag: "/miljopolicy",
});

// Från gamla livrustning.se (2026-09-18), med två uppenbara stavfel rättade. Meningen om
// leverans av hjärtstartare är borttagen (säljer inte hårdvara, besked 2026-09-18).
export default function Miljopolicy() {
  return (
    <Policysida rubrik="Miljöpolicy" ingress="Ingår i Livrustning AB:s systematiska arbetsmiljöarbete.">
      <h2>Målet med miljöarbetet</h2>
      <p>Det övergripande målet med miljöarbetet är att främja god hälsa och verka för en hälsosam miljö.</p>

      <h2>Genomförande</h2>
      <p>
        Miljölagstiftningen, Miljöbalken 2 kapitel om allmänna hänsynsregler, utgör grunden i arbetet. Vi ska förebygga
        föroreningar, hushålla med råvaror och minimera användning av energi och vatten i enlighet med Miljöbalkens
        Försiktighetsprincip 3 §, Kretsloppsprincipen 5 § och Produktvalsregeln 6 §.
      </p>
      <p>
        Exempel på miljöåtgärder: Instruktören åker vanligtvis till kunden för att utbilda kursdeltagarna istället för att
        alla kursdeltagare kommer till våra lokaler. Instruktören ska välja det miljömässigt bästa alternativet för
        transport av utrustning och sig själv. I Stockholmsområdet används elbil och i övriga landet samarbetar vi med
        lokala instruktörer så att de har kort avstånd till utbildningsplatsen.
      </p>
      <p>
        Livrustning AB har tillsammans med utbildningsföretaget Nice To Be Alive AB utvecklat det nya miljösmarta
        utbildningsformatet eHLR för att minska påverkan på miljön. Vi ska fortlöpande utveckla miljökompetensen hos alla
        anställda och underkonsulter.
      </p>

      <h2>Livrustning AB har skriftliga rutiner angående</h2>
      <ul>
        <li>Inköp och produktval</li>
        <li>Hantering av smittförande avfall och gods</li>
        <li>Användning av kemiska produkter</li>
      </ul>
      <p>
        Livrustning är medlem i Miljö- och klimatpakten, ett klimatnätverk från Stockholms stad för minskad
        klimatpåverkan.
      </p>

      <h2>Dokumentation</h2>
      <p>Rutiner och arbetsmaterial för Livrustnings miljöarbete finns.</p>

      <h2>Ansvar</h2>
      <p>VD är ytterst miljöansvarig.</p>
    </Policysida>
  );
}
