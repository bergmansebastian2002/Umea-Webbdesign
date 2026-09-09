import { restaurang } from "@/lib/kund";
import Brodsmulor from "@/components/Brodsmulor";
import Sektion from "@/components/Sektion";
import { byggMetadata } from "@/lib/seo";

export const metadata = {
  ...byggMetadata({
    titel: "Integritetspolicy",
    beskrivning: `Så hanterar ${restaurang.namn} personuppgifter och besöksstatistik.`,
    sokvag: "/integritetspolicy",
  }),
  robots: { index: false, follow: true },
};

const { kontakt } = restaurang;

/**
 * Integritetspolicy med kundens uppgifter från konfigen. Texten är en
 * grundmall - be kunden läsa igenom och komplettera vid behov, särskilt
 * om de använder fler tjänster (nyhetsbrev, kameraövervakning m.m.).
 */
export default function Integritetspolicy() {
  return (
    <>
      <Brodsmulor smulor={[{ namn: "Integritetspolicy", sokvag: "/integritetspolicy" }]} />

      <Sektion rubrik="Integritetspolicy" somH1 className="pt-10 md:pt-12">
        <div className="max-w-2xl space-y-8 leading-relaxed text-dampad">
          <div>
            <h2 className="font-rubrik text-xl text-text">Personuppgiftsansvarig</h2>
            <p className="mt-2">
              {restaurang.namn}
              {restaurang.orgNr ? ` (org.nr ${restaurang.orgNr})` : ""}, {kontakt.gata},{" "}
              {kontakt.postnummer} {kontakt.ort}. Kontakta oss på{" "}
              {kontakt.epost ? (
                <>
                  <a href={`mailto:${kontakt.epost}`} className="underline underline-offset-2">
                    {kontakt.epost}
                  </a>{" "}
                  eller {kontakt.telefon}
                </>
              ) : (
                <>{kontakt.telefon}</>
              )}{" "}
              vid frågor om personuppgifter.
            </p>
          </div>

          <div>
            <h2 className="font-rubrik text-xl text-text">Kontaktformuläret</h2>
            <p className="mt-2">
              När du skickar ett meddelande via kontaktformuläret behandlar vi
              namn, e-postadress, eventuellt telefonnummer och meddelandets
              innehåll. Uppgifterna används enbart för att besvara ditt ärende
              och raderas när ärendet är avslutat, senast inom tolv månader.
              Rättslig grund: berättigat intresse att besvara förfrågningar.
            </p>
          </div>

          <div>
            <h2 className="font-rubrik text-xl text-text">Bordsbokning</h2>
            <p className="mt-2">
              Bokningar hanteras av ett externt bokningssystem som öppnas i ett
              nytt fönster. Det systemet är personuppgiftsansvarigt för de
              uppgifter du lämnar där - se deras integritetspolicy.
            </p>
          </div>

          <div>
            <h2 className="font-rubrik text-xl text-text">Besöksstatistik</h2>
            <p className="mt-2">
              Med ditt samtycke använder vi anonym besöksstatistik (Vercel
              Analytics) för att förstå hur webbplatsen används - till exempel
              vilka sidor som besöks och om besökare klickar på boka
              bord-knappen. Statistiken innehåller inga uppgifter som
              identifierar dig som person och inga cookies för
              marknadsföring. Du kan ångra ditt samtycke genom att rensa
              webbplatsdata i din webbläsare - då visas frågan igen vid nästa
              besök.
            </p>
          </div>

          <div>
            <h2 className="font-rubrik text-xl text-text">Dina rättigheter</h2>
            <p className="mt-2">
              Du har rätt att begära tillgång till, rättelse av eller radering
              av dina personuppgifter, samt att invända mot behandlingen.
              Kontakta oss så hjälper vi dig. Du kan också lämna klagomål till
              Integritetsskyddsmyndigheten (imy.se).
            </p>
          </div>
        </div>
      </Sektion>
    </>
  );
}
