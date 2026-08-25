import type { ReactNode } from "react";

type Props = {
  id?: string;
  /** Liten versal text ovanför rubriken. */
  etikett?: string;
  rubrik?: string;
  ingress?: string;
  /** Rendera rubriken som sidans <h1>. Använd på undersidornas första sektion. */
  somH1?: boolean;
  /** Mörk sektion med profilfärg som bakgrund. */
  mork?: boolean;
  /** Centrerar rubrikblocket. */
  centrerad?: boolean;
  children: ReactNode;
  className?: string;
};

/** Standardsektion med enhetliga marginaler och rubrikblock. */
export default function Sektion({
  id,
  etikett,
  rubrik,
  ingress,
  somH1 = false,
  mork = false,
  centrerad = false,
  children,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${mork ? "bg-primar text-white" : ""} ${className}`}
    >
      <div className="omslag">
        {(etikett || rubrik || ingress) && (
          <header
            className={`avsloja mb-12 md:mb-16 max-w-2xl ${centrerad ? "mx-auto text-center" : ""}`}
          >
            {etikett && <p className="etikett">{etikett}</p>}
            {rubrik &&
              (somH1 ? (
                <h1 className="mt-4 text-[length:var(--text-rubrik)] leading-[1.15]">
                  {rubrik}
                </h1>
              ) : (
                <h2 className="mt-4 text-[length:var(--text-rubrik)] leading-[1.15]">
                  {rubrik}
                </h2>
              ))}
            {ingress && (
              <p
                className={`mt-5 text-base md:text-lg leading-relaxed ${
                  mork ? "text-white/70" : "text-dampad"
                }`}
              >
                {ingress}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
