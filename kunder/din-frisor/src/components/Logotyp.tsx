/**
 * Logotypen härmar skylten på fasaden: "Din" i rosa skript och FRISÖR i
 * spärrade versaler. `botten` styr färgerna för ljus respektive mörk yta.
 */
export default function Logotyp({ botten = "ljus" }: { botten?: "ljus" | "mork" }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
      <span
        className={`skript text-[1.35em] ${botten === "mork" ? "neon text-rosa-neon" : "text-rosa-djup"}`}
      >
        Din
      </span>
      <span
        className={`text-[0.95em] font-bold tracking-[0.18em] uppercase ${
          botten === "mork" ? "text-tavla-text" : "text-black"
        }`}
      >
        Frisör
      </span>
    </span>
  );
}
