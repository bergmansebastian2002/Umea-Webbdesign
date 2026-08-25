"use client";

import { useEffect, useState } from "react";

import { oppetStatus, type Oppetstatus } from "@/lib/oppettider";

/**
 * Visar "Öppet nu" eller "Stängt just nu" i realtid.
 *
 * Beräknas i webbläsaren efter att sidan laddats - annars skulle statusen
 * frysas till det klockslag då sajten byggdes. Uppdateras varje minut.
 */
export default function OppetNu({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Oppetstatus | null>(null);

  useEffect(() => {
    const uppdatera = () => setStatus(oppetStatus());
    uppdatera();
    const intervall = setInterval(uppdatera, 60_000);
    return () => clearInterval(intervall);
  }, []);

  // Innan beräkningen är klar reserveras ytan så layouten inte hoppar.
  if (!status) {
    return <span className={`inline-block h-5 w-40 ${className}`} aria-hidden="true" />;
  }

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm ${className}`}
      role="status"
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 shrink-0 rounded-full ${
          status.oppet ? "bg-emerald-500" : "bg-current opacity-40"
        }`}
      />
      {status.text}
    </span>
  );
}
