import { restaurang } from "@config/restaurang";
import Knapp from "@/components/Knapp";

export const metadata = {
  title: "Sidan hittades inte",
  robots: { index: false, follow: true },
};

export default function IckeHittad() {
  return (
    <div className="omslag flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <p className="etikett">404</p>
      <h1 className="mt-4 font-rubrik text-4xl md:text-5xl">Sidan hittades inte</h1>
      <p className="mt-4 max-w-md text-dampad">
        Länken kan vara gammal eller felstavad. Testa menyn ovan, eller ring oss
        på{" "}
        <a href={`tel:${restaurang.kontakt.telefonLank}`} className="text-accent">
          {restaurang.kontakt.telefon}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Knapp href="/">Till startsidan</Knapp>
        <Knapp href="/meny" variant="kontur">
          Se menyn
        </Knapp>
      </div>
    </div>
  );
}
