import type { Metadata } from "next";

import { metadataFor } from "@/lib/seo";
import { foretag } from "@/lib/site";

export const metadata: Metadata = metadataFor({
  titel: "Integritetspolicy",
  beskrivning: "Så hanterar Din Frisör i Umeå personuppgifter på webbplatsen.",
  sokvag: "/integritetspolicy",
});

export default function Integritetspolicy() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Integritetspolicy</h1>

      <div className="mt-8 space-y-6 text-grafit">
        <p>
          Den här webbplatsen samlar inte in några personuppgifter. Här finns
          inga formulär, inga konton och ingen inloggning.
        </p>
        <p>
          Webbplatsen använder inga kakor (cookies) och ingen spårning eller
          statistik från tredje part. Teckensnitt och annat innehåll levereras
          från webbplatsens egen server.
        </p>
        <p>
          Webbhotellet kan av tekniska skäl och för driftsäkerhet föra
          serverloggar med IP-adresser. Loggarna används inte för att
          identifiera besökare.
        </p>
        <p>
          Ringer du oss behandlas ditt telefonnummer bara för att kunna svara
          och, om du bokar en tid, för att hålla bokningen. Har du frågor om
          hur vi hanterar uppgifter är du välkommen att ringa{" "}
          <a href={foretag.telefonLank} className="font-semibold text-rosa-djup hover:underline">
            {foretag.telefon}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
