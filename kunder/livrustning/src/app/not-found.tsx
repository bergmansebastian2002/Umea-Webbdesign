import type { Metadata } from "next";
import Link from "next/link";

import Ekg from "@/components/Ekg";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false, follow: false },
};

export default function HittadesInte() {
  return (
    <section className="ekg-papper ekg-papper-tonad">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] font-bold">Ingen puls här.</h1>
        <p className="mt-6 max-w-xl text-xl text-grafit">
          Sidan du letar efter finns inte, eller har flyttat när vi gjorde om hemsidan.
        </p>
        {/* En platt linje, utan slag. */}
        <Ekg slag={[]} hojd={48} direkt className="mt-12 max-w-3xl" />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="knapp knapp-primar">
            Till startsidan
          </Link>
          <Link href="/utbildningar" className="knapp knapp-sekundar">
            Se utbildningarna
          </Link>
        </div>
      </div>
    </section>
  );
}
