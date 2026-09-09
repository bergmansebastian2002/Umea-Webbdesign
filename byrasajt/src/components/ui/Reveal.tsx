"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals every .reveal element with a fade + 24px rise when it scrolls
 * into view. Re-runs on every route change so new pages get observed too.
 * CSS handles the no-JS case (everything visible) and
 * prefers-reduced-motion (transitions disabled globally).
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
