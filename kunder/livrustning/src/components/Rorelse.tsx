"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

// useLayoutEffect varnar på servern; där gör effekten ändå ingenting.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Scrollrörelsen: element med `data-in` får klassen `inne` när de kommer in i
 * fönstret och glider då på plats (se globals.css).
 *
 * Allt är synligt som standard. Först när den här komponenten satt `.rorelse`
 * på <html> göms det som ligger längre ner. Utan JS eller om något går fel
 * syns alltså hela sidan, bara utan rörelse. Med reduced motion tonas
 * innehållet bara in, utan förflyttning (se globals.css).
 */
export default function Rorelse() {
  const pathname = usePathname();

  useIsoLayoutEffect(() => {
    const rot = document.documentElement;
    if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) return;

    const visa = (el: Element) => el.classList.add("inne");
    const io = new IntersectionObserver(
      (poster) => {
        for (const p of poster) {
          if (p.isIntersecting) {
            visa(p.target);
            io.unobserve(p.target);
          }
        }
      },
      // threshold 0: höga block når aldrig en andel över noll annars.
      // Fönstret räknas som oändligt högt uppåt: det man hoppat förbi (End-tangenten,
      // rullningslisten, ett ankare) visas då också, i stället för att förbli dolt.
      { threshold: 0, rootMargin: "100000px 0px -9% 0px" },
    );

    const registrera = (el: Element) => {
      if (el.classList.contains("inne")) return;
      // Det som redan syns eller ligger ovanför fönstret visas direkt, utan rörelse.
      // Undantag: data-in-alltid är gömt redan från första målningen (se globals.css)
      // och glider in strax efter laddning även om det syns direkt.
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.94) {
        if (el.hasAttribute("data-in-alltid") && top > 0) {
          requestAnimationFrame(() => requestAnimationFrame(() => visa(el)));
        } else visa(el);
      } else io.observe(el);
    };
    // Rullbandet med kundloggor vilar när det inte syns, så att webbläsaren
    // slipper hålla det i rörelse medan man läser resten av sidan.
    const vila = new IntersectionObserver(
      (poster) => {
        for (const p of poster) p.target.toggleAttribute("data-vilar", !p.isIntersecting);
      },
      { rootMargin: "120px 0px" },
    );

    const sok = (nod: ParentNode) => {
      nod.querySelectorAll("[data-in]").forEach(registrera);
      nod.querySelectorAll(".rullband").forEach((el) => vila.observe(el));
    };

    sok(document);
    rot.classList.add("rorelse");

    // Sidbyten i Next byter ut innehållet utan omladdning: fånga nya element.
    const mo = new MutationObserver((andringar) => {
      for (const a of andringar) {
        a.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.hasAttribute("data-in")) registrera(n);
          sok(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      vila.disconnect();
      mo.disconnect();
      rot.classList.remove("rorelse");
    };
  }, [pathname]);

  return null;
}
