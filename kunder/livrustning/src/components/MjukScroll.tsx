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
        const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, anchors: true, autoRaf: true });
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
