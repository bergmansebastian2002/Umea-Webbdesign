import Link from "next/link";

import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-32">
      <div className="wrap max-w-xl">
        <p className="kicker">404</p>
        <h1 className="mt-4 text-[length:var(--text-title)] leading-[1.12]">
          Sidan hittades inte
        </h1>
        <p className="mt-5 leading-relaxed text-mist">
          Länken kan vara gammal eller felstavad. Testa menyn ovan eller gå
          tillbaka till startsidan.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Till startsidan</Button>
          <Link
            href="/#kontakt"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-line px-7 py-3.5 text-sm font-semibold text-ink hover:border-gold-2"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </section>
  );
}
