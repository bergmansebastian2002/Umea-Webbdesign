"use client";

import { useEffect } from "react";

import "lenis/dist/lenis.css";

/** Det som kan sätta sidan i rörelse: då ska Lenis loop vara igång. */
const VACKARE = ["wheel", "touchstart", "touchmove", "keydown", "pointerdown", "click", "scroll", "resize"] as const;

/**
 * Mjuk scroll på hela sajten, med samma bibliotek som snajp.se (Lenis).
 * Hjulet och tangenterna glider i stället för att hoppa; pekskärmar behåller
 * sin egen scroll, som redan är mjuk. Lenis laddas först i webbläsaren och
 * sidan fungerar som vanligt om det inte går.
 *
 * Lenis räknar fram scrollen i en loop som går en gång per bildruta. Loopen
 * går bara medan sidan faktiskt rör sig och en halv sekund efteråt. Står sidan
 * still gör den ingenting, och då kan grafikkortet sköta pulsen och rullbandet
 * utan att webbläsaren behöver räkna om något för varje bildruta.
 */
export default function MjukScroll() {
  useEffect(() => {
    let avsluta = () => {};
    let avbruten = false;
    import("lenis")
      .then(({ default: Lenis }) => {
        if (avbruten) return;
        // Samma takt som snajp.se (lerp 0,075 och hjul 0,6). respectReducedMotion
        // måste vara av: annars stänger Lenis av sig själv när Windows har
        // animeringar avstängda, och då hackar scrollen som vanligt.
        const lenis = new Lenis({
          lerp: 0.075,
          wheelMultiplier: 0.6,
          anchors: true,
          autoRaf: false,
          respectReducedMotion: false,
        });

        let ram = 0;
        let stilla = 0;
        let sokvag = window.location.pathname;
        const varv = (tid: number) => {
          // Sidbyte medan scrollen ännu glider: Next har redan ställt den nya sidan
          // rätt (överst, eller vid ankaret). Släpp det gamla målet och utgå därifrån,
          // annars drar glidningen ned den nya sidan dit den gamla var på väg.
          if (window.location.pathname !== sokvag) {
            sokvag = window.location.pathname;
            lenis.scrollTo(window.scrollY, { immediate: true, force: true });
          }
          lenis.raf(tid);
          stilla = lenis.isScrolling ? 0 : stilla + 1;
          // Ungefär en halv sekund utan rörelse: loopen vilar tills något händer.
          ram = stilla > 30 ? 0 : requestAnimationFrame(varv);
        };
        const vack = () => {
          stilla = 0;
          if (ram) return;
          // Lenis mäter tiden mellan två varv. Efter en vila ska den räkna från nu,
          // annars tror den att flera sekunder gått och hoppar i stället för att glida.
          lenis.time = performance.now();
          ram = requestAnimationFrame(varv);
        };
        for (const h of VACKARE) window.addEventListener(h, vack, { passive: true, capture: true });
        vack();

        avsluta = () => {
          for (const h of VACKARE) window.removeEventListener(h, vack, { capture: true });
          cancelAnimationFrame(ram);
          lenis.destroy();
        };
      })
      .catch(() => {});
    return () => {
      avbruten = true;
      avsluta();
    };
  }, []);

  return null;
}
