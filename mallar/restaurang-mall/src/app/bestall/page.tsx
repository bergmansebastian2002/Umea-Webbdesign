import { notFound } from "next/navigation";

import { restaurang } from "@/lib/kund";
import BestallDemo from "@/components/BestallDemo";
import Brodsmulor from "@/components/Brodsmulor";
import Sektion from "@/components/Sektion";
import { byggMetadata } from "@/lib/seo";

export const metadata = {
  ...byggMetadata({
    titel: "Beställ och hämta",
    beskrivning: `Klicka ihop din beställning från ${restaurang.namn} och hämta i restaurangen.`,
    sokvag: "/bestall",
  }),
  // Demosida - ska inte indexeras förrän betalningen är riktig.
  robots: { index: false, follow: false },
};

export default function BestallSida() {
  const demo = restaurang.bestallningDemo;
  if (!demo?.aktiv) notFound();

  return (
    <>
      <Brodsmulor smulor={[{ namn: "Beställ", sokvag: "/bestall" }]} />

      <Sektion
        etikett="Beställ och hämta"
        rubrik="Klicka ihop din beställning"
        somH1
        ingress={demo.notis}
        className="pt-10 md:pt-12"
      >
        <BestallDemo />
      </Sektion>
    </>
  );
}
