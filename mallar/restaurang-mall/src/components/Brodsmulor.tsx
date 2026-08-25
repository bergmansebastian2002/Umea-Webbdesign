import Link from "next/link";

import { brodsmulorSchema, jsonLd } from "@/lib/strukturerad-data";

type Smula = { namn: string; sokvag: string };

/**
 * Brödsmulor högst upp på undersidorna. Skriver även ut strukturerad data
 * så Google kan visa sidhierarkin i sökresultatet.
 */
export default function Brodsmulor({ smulor }: { smulor: Smula[] }) {
  const alla: Smula[] = [{ namn: "Start", sokvag: "/" }, ...smulor];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(brodsmulorSchema(alla))}
      />
      <nav aria-label="Brödsmulor" className="omslag pt-28 md:pt-36">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-dampad">
          {alla.map((smula, index) => {
            const sist = index === alla.length - 1;
            return (
              <li key={smula.sokvag} className="flex items-center gap-2">
                {sist ? (
                  <span aria-current="page">{smula.namn}</span>
                ) : (
                  <>
                    <Link href={smula.sokvag} className="hover:text-accent">
                      {smula.namn}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
