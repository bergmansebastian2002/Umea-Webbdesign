import Policysida from "@/components/Policysida";
import { metadataFor } from "@/lib/seo";
import { foretag, mejl } from "@/lib/site";

export const metadata = metadataFor({
  titel: "Integritetspolicy",
  beskrivning: "Så behandlar Livrustning AB dina personuppgifter när du besöker webbplatsen, kontaktar oss eller går en utbildning.",
  sokvag: "/integritetspolicy",
});

// Skriven för den nya sajten (inga kakor, inga formulär). FÖRSLAG: ska granskas av Livrustning före publicering.
export default function Integritetspolicy() {
  return (
    <Policysida
      rubrik="Integritetspolicy"
      ingress="Du ska kunna känna dig trygg när du lämnar dina personuppgifter till oss. Här beskriver vi hur vi hanterar dem."
    >
      <h2>Personuppgiftsansvarig</h2>
      <p>
        {foretag.juridisktNamn}, org.nr {foretag.orgnr}, {foretag.gata}, {foretag.postnummer} {foretag.ort}, är
        personuppgiftsansvarig. Du når oss på{" "}
        <a href={mejl("Fråga om personuppgifter", false)} className="textlank">
          {foretag.epost}
        </a>
        .
      </p>

      <h2>Webbplatsen</h2>
      <p>
        Webbplatsen använder inga kakor för spårning eller marknadsföring och har inga formulär. När du klickar på en
        knapp eller en adress för att mejla oss öppnas ditt eget mejlprogram, och det är först när du skickar mejlet
        som vi får dina uppgifter.
      </p>

      <h2>Vilka uppgifter vi behandlar</h2>
      <ul>
        <li>Namn, e-postadress, telefonnummer och det du skriver när du kontaktar oss.</li>
        <li>Uppgifter om ditt företag eller din organisation, till exempel antal deltagare och ort, när du ber om offert.</li>
        <li>Namn och e-postadress för kursdeltagare, när det behövs för att skicka slutprov och utbildningsintyg.</li>
        <li>Faktureringsuppgifter när du köper en utbildning.</li>
      </ul>

      <h2>Varför vi behandlar dem</h2>
      <p>
        Vi använder uppgifterna för att svara på frågor, lämna offerter, genomföra utbildningar, utfärda intyg och
        fakturera. Den rättsliga grunden är att fullgöra avtal med dig eller din arbetsgivare, vårt berättigade intresse av
        att besvara förfrågningar, samt rättsliga förpliktelser som bokföringslagen.
      </p>

      <h2>Hur länge vi sparar dem</h2>
      <p>
        Vi sparar inte uppgifterna längre än vad som behövs för ändamålet. Uppgifter som krävs enligt bokföringslagen
        sparas så länge lagen kräver.
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Du har rätt att få veta vilka uppgifter vi har om dig, att få felaktiga uppgifter rättade och att i vissa fall få
        dem raderade eller begränsade. Kontakta oss på {foretag.epost}. Om du anser att vi behandlar dina uppgifter fel
        kan du lämna klagomål till Integritetsskyddsmyndigheten (IMY).
      </p>
    </Policysida>
  );
}
