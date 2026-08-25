"use client";

import { useEffect } from "react";

/**
 * Global observatör som ger alla element med klassen `avsloja` en mjuk
 * inglidning när de rullas in i bild. Monteras en gång i layouten.
 *
 * Robusthet:
 * - Utan JavaScript visas allt direkt (startläget sätts bara via
 *   `@media (scripting: enabled)` i globals.css).
 * - Element som redan är i bild avslöjas synkront vid montering.
 * - En säkerhetstimeout avslöjar allt efter 3 s ifall observatören av
 *   någon anledning aldrig triggas - innehåll får aldrig fastna osynligt.
 * - `prefers-reduced-motion` stänger av rörelsen via CSS.
 */
export default function ScrollAvslojning() {
  useEffect(() => {
    const alla = Array.from(document.querySelectorAll<HTMLElement>(".avsloja"));
    if (alla.length === 0) return;

    const avsloja = (el: Element) => el.classList.add("avsloja-syns");

    // Avslöja det som redan syns, utan att vänta på observatören.
    for (const el of alla) {
      const rekt = el.getBoundingClientRect();
      if (rekt.top < window.innerHeight && rekt.bottom > 0) avsloja(el);
    }

    const observatör = new IntersectionObserver(
      (poster) => {
        for (const post of poster) {
          if (post.isIntersecting) {
            avsloja(post.target);
            observatör.unobserve(post.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    alla.forEach((el) => observatör.observe(el));

    // Säkerhetsnät: efter 3 sekunder visas allt oavsett.
    const timeout = setTimeout(() => alla.forEach(avsloja), 3000);

    return () => {
      observatör.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
