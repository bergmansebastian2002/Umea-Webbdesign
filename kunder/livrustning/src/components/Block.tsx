import Link from "next/link";
import type { ReactNode } from "react";

import Ekg from "@/components/Ekg";
import { Pil, Telefon } from "@/components/Ikoner";
import { amnen, foretag, mejl } from "@/lib/site";

/** Magenta Kontakta oss-knapp som öppnar mejlet med rätt ämnesrad. */
export function KontaktKnapp({
  amne = amnen.allmant,
  children = "Kontakta oss",
  className = "",
}: {
  amne?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={mejl(amne)} className={`knapp knapp-primar ${className}`}>
      {children}
    </a>
  );
}

/**
 * Kurvan som slutar i knappen: EKG-linjen löper in från vänster och
 * sista slaget landar precis vid Kontakta oss.
 */
export function KurvaTillKnapp({
  amne,
  knapptext = "Kontakta oss",
  slag = [0.34, 0.78],
  direkt = false,
}: {
  amne?: string;
  knapptext?: string;
  slag?: number[];
  direkt?: boolean;
}) {
  return (
    <div className="flex items-center">
      <Ekg slag={slag} hojd={72} puls direkt={direkt} className="min-w-0 flex-1" />
      <KontaktKnapp amne={amne} className="relative z-10 shrink-0">
        {knapptext}
      </KontaktKnapp>
    </div>
  );
}

/** Rubrikblock för undersidor, på EKG-papper. */
export function Sidrubrik({
  rubrik,
  ingress,
  sokvag,
  children,
}: {
  rubrik: ReactNode;
  ingress: ReactNode;
  sokvag?: { namn: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="ekg-papper ekg-papper-tonad border-b border-black/10">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-14 lg:px-8 lg:pt-20 lg:pb-20">
        {sokvag && (
          <nav aria-label="Du är här" className="mb-8 text-sm text-grafit">
            <ol className="flex flex-wrap items-center gap-2">
              {sokvag.map((s, i) => (
                <li key={s.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < sokvag.length - 1 ? (
                    <Link href={s.href} className="hover:text-magenta-mork hover:underline">
                      {s.namn}
                    </Link>
                  ) : (
                    <span aria-current="page">{s.namn}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] font-bold">{rubrik}</h1>
        <div className="mt-6 max-w-2xl text-xl leading-relaxed text-grafit lg:text-[1.375rem]">{ingress}</div>
        {children}
      </div>
    </section>
  );
}

/** Avslutande uppmaning, samma på alla sidor: kurvan slutar i knappen. */
export function Avslut({
  rubrik = "Hur många ska kunna rädda liv hos er?",
  text = "Berätta hur många ni är, var ni finns och när det passar. Då skickar vi en offert.",
  amne,
}: {
  rubrik?: string;
  text?: string;
  amne?: string;
}) {
  return (
    <section className="ekg-papper border-t border-black/10">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">{rubrik}</h2>
          <p className="mt-5 max-w-xl text-xl text-grafit">{text}</p>
        </div>
        <div className="mt-10 max-w-4xl">
          <KurvaTillKnapp amne={amne} />
        </div>
        <p className="mt-6 text-grafit">
          Hellre prata direkt? Ring{" "}
          <a href={foretag.telefonHref} className="textlank siffror inline-flex items-center gap-1.5">
            <Telefon className="size-4" />
            {foretag.telefon}
          </a>
        </p>
      </div>
    </section>
  );
}

/** Pil-länk i löptext eller under ett block. */
export function PilLank({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`textlank inline-flex items-center gap-2 no-underline ${className}`}>
      <span className="underline decoration-magenta/35 underline-offset-[0.2em] hover:decoration-current">{children}</span>
      <Pil className="size-5" />
    </Link>
  );
}
