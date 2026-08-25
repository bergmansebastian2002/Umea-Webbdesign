import { restaurang } from "@/lib/kund";
import Brodsmulor from "@/components/Brodsmulor";
import Karta from "@/components/Karta";
import KontaktFormular from "@/components/KontaktFormular";
import Oppettider from "@/components/Oppettider";
import Sektion from "@/components/Sektion";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import { byggMetadata } from "@/lib/seo";

const { kontakt, seo, sektioner } = restaurang;

export const metadata = byggMetadata({
  titel: "Kontakt",
  beskrivning: `Kontakta ${restaurang.namn} i ${seo.stad}. Ring ${kontakt.telefon}${kontakt.epost ? `, mejla ${kontakt.epost}` : ""} eller besök oss på ${kontakt.gata}.`,
  sokvag: "/kontakt",
});

export default function Kontaktsida() {
  return (
    <>
      <Brodsmulor smulor={[{ namn: "Kontakt", sokvag: "/kontakt" }]} />

      <Sektion
        etikett="Kontakt"
        rubrik="Hör av dig"
        somH1
        ingress={`Ska du boka bord går det snabbast via vårt bokningssystem. Har du en fråga om allergier, större sällskap eller något annat - hör av dig här.`}
        className="pt-10 md:pt-12"
      >
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <div>
            {sektioner.kontaktformular ? (
              <KontaktFormular />
            ) : (
              <div className="rounded-mall border border-ram bg-yta p-8">
                <p className="text-dampad">
                  Ring oss på{" "}
                  <a href={`tel:${kontakt.telefonLank}`} className="text-accent">
                    {kontakt.telefon}
                  </a>
                  {kontakt.epost ? (
                    <>
                      {" "}
                      eller mejla{" "}
                      <a href={`mailto:${kontakt.epost}`} className="text-accent">
                        {kontakt.epost}
                      </a>
                    </>
                  ) : (
                    <> så hjälper vi dig direkt</>
                  )}
                  .
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <p className="etikett">Direktkontakt</p>
              <div className="mt-4 space-y-1 text-base">
                <a href={`tel:${kontakt.telefonLank}`} className="block hover:text-accent">
                  {kontakt.telefon}
                </a>
                {kontakt.epost && (
                  <a href={`mailto:${kontakt.epost}`} className="block hover:text-accent">
                    {kontakt.epost}
                  </a>
                )}
              </div>
              <address className="mt-4 space-y-1 text-sm not-italic text-dampad">
                <span className="block">{kontakt.gata}</span>
                <span className="block">
                  {kontakt.postnummer} {kontakt.ort}
                </span>
              </address>
            </div>

            <div className="border-t border-ram pt-8">
              <p className="etikett">Öppettider</p>
              <Oppettider className="mt-4" />
            </div>

            <div className="border-t border-ram pt-8">
              <p className="etikett">Boka bord</p>
              <div className="mt-4">
                <BokaBordKnapp className="w-full" visaHjalptext />
              </div>
            </div>
          </aside>
        </div>
      </Sektion>

      {sektioner.karta && (
        <section className="border-t border-ram bg-yta py-16 md:py-24">
          <div className="omslag">
            <Karta hojd="h-[22rem] md:h-[28rem]" />
          </div>
        </section>
      )}
    </>
  );
}
