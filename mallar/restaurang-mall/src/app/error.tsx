"use client";

import { useEffect } from "react";

import { restaurang } from "@/lib/kund";

/** Visas om något oväntat går fel. Ger besökaren en väg vidare. */
export default function Fel({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[fel]", error);
  }, [error]);

  return (
    <div className="omslag flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <p className="etikett">Något gick fel</p>
      <h1 className="mt-4 font-rubrik text-4xl">Sidan kunde inte visas</h1>
      <p className="mt-4 max-w-md text-dampad">
        Försök igen om en stund. Vill du boka bord eller nå oss direkt går det
        alltid bra att ringa{" "}
        <a href={`tel:${restaurang.kontakt.telefonLank}`} className="text-accent" data-spar="ring">
          {restaurang.kontakt.telefon}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-mall bg-accent px-7 py-3.5 text-sm font-medium text-accent-text hover:brightness-110"
      >
        Försök igen
      </button>
    </div>
  );
}
