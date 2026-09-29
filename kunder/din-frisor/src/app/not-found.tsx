import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false, follow: false },
};

export default function SidanFinnsInte() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
      <p className="skript text-4xl text-rosa-djup">Hoppsan!</p>
      <h1 className="mt-4 text-3xl font-bold">Den här sidan finns inte</h1>
      <p className="mx-auto mt-4 max-w-md text-grafit">
        Adressen kan vara felskriven, eller så har sidan tagits bort. Allt om
        salongen finns på startsidan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-rosa-djup px-7 font-semibold text-white transition-colors hover:bg-rosa"
      >
        Till startsidan
      </Link>
    </section>
  );
}
