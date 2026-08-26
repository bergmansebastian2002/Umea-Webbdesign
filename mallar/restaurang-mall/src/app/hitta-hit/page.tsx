import { restaurang } from "@/lib/kund";
import Brodsmulor from "@/components/Brodsmulor";
import Karta from "@/components/Karta";
import Oppettider from "@/components/Oppettider";
import Sektion from "@/components/Sektion";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import { byggMetadata } from "@/lib/seo";

const { kontakt, seo } = restaurang;

export const metadata = byggMetadata({
  titel: "Hitta hit",
  beskrivning: `${restaurang.namn} ligger på ${kontakt.gata}, ${kontakt.postnummer} ${kontakt.ort}. Se karta, vägbeskrivning och öppettider.`,
  sokvag: "/hitta-hit",
});

export default function HittaHitSida() {
  return (
    <>
      <Brodsmulor smulor={[{ namn: "Hitta hit", sokvag: "/hitta-hit" }]} />

      <Sektion
        etikett={seo.omrade ? `${seo.stad} ${seo.omrade}` : seo.stad}
        rubrik="Hitta hit"
        somH1
        ingress={`Du hittar oss på ${kontakt.gata} i ${kontakt.ort}. Nedan ser du karta, vägbeskrivning och våra öppettider.`}
        className="pt-10 md:pt-12"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <div>
            <p className="etikett">Adress</p>
            <address className="mt-3 space-y-1 text-base not-italic leading-relaxed">
              <span className="block font-medium">{restaurang.namn}</span>
              <span className="block text-dampad">{kontakt.gata}</span>
              <span className="block text-dampad">
                {kontakt.postnummer} {kontakt.ort}
              </span>
              <span className="block text-dampad">{kontakt.land}</span>
            </address>

            <div className="mt-6 space-y-1 text-base">
              <a href={`tel:${kontakt.telefonLank}`} className="block hover:text-accent">
                {kontakt.telefon}
              </a>
              {kontakt.epost && (
                <a href={`mailto:${kontakt.epost}`} className="block hover:text-accent">
                  {kontakt.epost}
                </a>
              )}
            </div>

            <div className="mt-10 border-t border-ram pt-8">
              <p className="etikett">Öppettider</p>
              <Oppettider className="mt-4" />
            </div>

            <div className="mt-10">
              <BokaBordKnapp visaHjalptext />
            </div>
          </div>

          <div>
            <Karta hojd="h-[26rem] md:h-[34rem]" />
          </div>
        </div>
      </Sektion>
    </>
  );
}
