import Image from "next/image";

import { restaurang } from "@config/restaurang";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import Brodsmulor from "@/components/Brodsmulor";
import Galleri from "@/components/Galleri";
import Sektion from "@/components/Sektion";
import { byggMetadata } from "@/lib/seo";

export const metadata = byggMetadata({
  titel: "Om oss",
  beskrivning: `Lär känna ${restaurang.namn} i ${restaurang.seo.stad} - vår mat, vårt kök och vår matsal. ${restaurang.kortBeskrivning}`,
  sokvag: "/om-oss",
});

export default function OmOssSida() {
  const { bilder, seo } = restaurang;

  return (
    <>
      <Brodsmulor smulor={[{ namn: "Om oss", sokvag: "/om-oss" }]} />

      <Sektion
        etikett="Om oss"
        rubrik={`${restaurang.namn} i ${seo.stad}`}
        somH1
        className="pt-10 md:pt-12"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-dampad md:text-lg">
            {restaurang.omOssStycken.map((stycke) => (
              <p key={stycke.slice(0, 40)}>{stycke}</p>
            ))}

            <div className="pt-4">
              <BokaBordKnapp visaHjalptext />
            </div>
          </div>

          <div className="relative aspect-4/5 overflow-hidden rounded-mall">
            <Image
              src={bilder.omOss}
              alt={`Matsalen på ${restaurang.namn} i ${seo.stad}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 26rem"
              className="object-cover"
            />
          </div>
        </div>
      </Sektion>

      {restaurang.sektioner.galleri && bilder.galleri.length > 0 && (
        <Sektion
          etikett="Galleri"
          rubrik="Bilder från restaurangen"
          className="border-t border-ram bg-yta"
        >
          <Galleri bilder={bilder.galleri} />
        </Sektion>
      )}
    </>
  );
}
