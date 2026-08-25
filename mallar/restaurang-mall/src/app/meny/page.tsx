import { meny, restaurang } from "@/lib/kund";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import Brodsmulor from "@/components/Brodsmulor";
import MenyFilter from "@/components/MenyFilter";
import Sektion from "@/components/Sektion";
import { byggMetadata } from "@/lib/seo";
import { jsonLd, menySchema } from "@/lib/strukturerad-data";

export const metadata = byggMetadata({
  titel: meny.rubrik,
  beskrivning: `Se hela menyn hos ${restaurang.namn} i ${restaurang.seo.stad}. ${
    meny.ingress ?? ""
  } Boka bord direkt online.`.trim(),
  sokvag: "/meny",
});

export default function Menysida() {
  return (
    <>
      {/* Menyn som strukturerad data - Google kan visa rätter och priser. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(menySchema())} />

      <Brodsmulor smulor={[{ namn: "Meny", sokvag: "/meny" }]} />

      <Sektion
        etikett={`${restaurang.seo.kokstyper.join(" · ")} i ${restaurang.seo.stad}`}
        rubrik={meny.rubrik}
        somH1
        ingress={meny.ingress}
        className="pt-10 md:pt-12"
      >
        <MenyFilter meny={meny} />

        <div className="mt-16 rounded-mall border border-ram bg-yta p-8 md:p-10">
          <h2 className="font-rubrik text-2xl">Hungrig?</h2>
          <p className="mt-2 max-w-xl text-dampad">
            Boka ditt bord online - det tar under en minut. Har du frågor om
            allergier eller vill boka ett större sällskap hjälper vi dig gärna
            på telefon.
          </p>
          <div className="mt-6">
            <BokaBordKnapp visaHjalptext />
          </div>
        </div>
      </Sektion>
    </>
  );
}
