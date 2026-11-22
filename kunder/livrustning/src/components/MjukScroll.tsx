"use client";

import { useEffect } from "react";

import "lenis/dist/lenis.css";

/**
 * Mjuk scroll på hela sajten, med samma bibliotek som snajp.se (Lenis).
 * Hjulet och tangenterna glider i stället för att hoppa; pekskärmar behåller
 * sin egen scroll, som redan är mjuk. Lenis laddas först i webbläsaren och
 * sidan fungerar som vanligt om det inte går.
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
          autoRaf: true,
          respectReducedMotion: false,
        });
        avsluta = () => lenis.destroy();
      })
      .catch(() => {});
    return () => {
      avbruten = true;
      avsluta();
    };
  }, []);

  return null;
}
