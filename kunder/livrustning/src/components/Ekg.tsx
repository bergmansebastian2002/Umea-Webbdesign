"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * EKG-kurvan ur loggan, ritad i verklig pixelbredd så att slagen alltid
 * behåller sin form. Kurvan ritas fram en gång när den syns (stroke-dashoffset
 * med pathLength=1); utan JS eller med reduced motion visas den färdig.
 *
 * `slag` anger var hjärtslagen sitter, som andel av bredden (0-1).
 */
type Props = {
  slag?: number[];
  hojd?: number;
  tjocklek?: number;
  farg?: string;
  /** Pulserande ring där kurvan slutar (t.ex. precis vid en knapp). */
  puls?: boolean;
  /** Ritas direkt när sidan laddas i stället för när den scrollas in. */
  direkt?: boolean;
  tid?: number;
  className?: string;
};

const SLAGBREDD = 1.35; // slagets bredd i förhållande till höjden

function kurva(bredd: number, hojd: number, slag: number[]) {
  const bas = hojd * 0.66;
  const upp = bas * 0.94;
  const w = hojd * SLAGBREDD;
  const d: string[] = [`M0 ${bas}`];

  // På smala skärmar får slagen inte trängas ihop: behåll bara de som får
  // plats med luft emellan, räknat bakifrån så att sista slaget (vid knappen) blir kvar.
  const minstaAvstand = w * 1.9;
  const kvar: number[] = [];
  for (const andel of [...slag].sort((a, b) => b - a)) {
    if (kvar.every((k) => Math.abs(k - andel) * bredd >= minstaAvstand)) kvar.push(andel);
  }

  for (const andel of kvar.sort((a, b) => a - b)) {
    const x0 = Math.min(Math.max(andel * bredd - w * 0.3, 0), bredd - w);
    const x = (u: number) => (x0 + u * w).toFixed(1);
    const y = (v: number) => (bas - v * upp).toFixed(1);
    d.push(
      `L${x(0)} ${y(0)}`,
      `Q${x(0.07)} ${y(0.16)} ${x(0.14)} ${y(0)}`, // P
      `L${x(0.2)} ${y(0)}`,
      `L${x(0.24)} ${y(-0.1)}`, // Q
      `L${x(0.3)} ${y(1)}`, // R
      `L${x(0.36)} ${y(-0.32)}`, // S
      `L${x(0.41)} ${y(0)}`,
      `L${x(0.52)} ${y(0)}`,
      `Q${x(0.62)} ${y(0.3)} ${x(0.72)} ${y(0)}`, // T
    );
  }
  d.push(`L${bredd} ${bas}`);
  return { d: d.join(" "), bas };
}

export default function Ekg({
  slag = [0.5],
  hojd = 64,
  tjocklek = 2.5,
  farg = "var(--color-magenta)",
  puls = false,
  direkt = false,
  tid = 1.6,
  className = "",
}: Props) {
  const ram = useRef<HTMLDivElement>(null);
  const [bredd, setBredd] = useState(0);
  const [lage, setLage] = useState<"vantar" | "ritar">("vantar");
  const id = useId();

  useEffect(() => {
    const el = ram.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setBredd(Math.round(e.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ram.current;
    if (!el || bredd === 0) return;
    if (direkt) {
      const t = requestAnimationFrame(() => requestAnimationFrame(() => setLage("ritar")));
      return () => cancelAnimationFrame(t);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLage("ritar");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [bredd, direkt]);

  const { d, bas } = bredd > 0 ? kurva(bredd, hojd, slag) : { d: "", bas: hojd * 0.66 };

  return (
    <div ref={ram} className={`relative w-full ${className}`} style={{ height: hojd }} aria-hidden="true">
      {bredd > 0 && (
        <svg
          width={bredd}
          height={hojd}
          viewBox={`0 0 ${bredd} ${hojd}`}
          className="absolute inset-0 overflow-visible"
          style={{ ["--ekg-tid" as string]: `${tid}s` }}
        >
          <path
            key={id + bredd}
            className="ekg-kurva"
            data-rita={lage}
            d={d}
            pathLength={1}
            fill="none"
            stroke={farg}
            strokeWidth={tjocklek}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {puls && <circle className="ekg-prick" cx={bredd - 2} cy={bas} r={4} fill={farg} />}
        </svg>
      )}
    </div>
  );
}
