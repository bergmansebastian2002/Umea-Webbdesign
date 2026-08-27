"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { ExampleSlide } from "@/data/site";

const INTERVAL_MS = 4500;

/**
 * Auto-playing slideshow for the example cards: slides crossfade while the
 * active image does a slow Ken Burns zoom. Pauses on hover/focus, off-screen
 * and in background tabs; prefers-reduced-motion turns the motion off via
 * the global CSS override. Dots allow manual navigation.
 */
export default function Bildspel({
  slides,
  name,
  eager = false,
}: {
  slides: ExampleSlide[];
  name: string;
  /** Load the first slide eagerly - use above the fold (hero). */
  eager?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Playing from the start - the observer below only pauses the slideshow
  // while the card is provably scrolled out of view.
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-advance as soon as the card is visible. Under prefers-reduced-motion
  // the global CSS strips the crossfade/zoom, so slides change with calm cuts.
  useEffect(() => {
    if (paused || !inView) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, inView, slides.length]);

  return (
    <div
      ref={rootRef}
      role="group"
      aria-roledescription="bildspel"
      aria-label={`Bilder från ${name}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative aspect-16/9 overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={i === index ? slide.alt : ""}
            fill
            priority={eager && i === 0}
            loading={eager && i === 0 ? undefined : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`object-cover ${i === index ? "kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Soft gradient so the chip and dots stay readable on any photo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/45 via-transparent to-night/25"
      />

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={(event) => {
              // Keep the card's outer link from firing when a dot is pressed.
              event.preventDefault();
              event.stopPropagation();
              setIndex(i);
            }}
            aria-label={`Visa bild ${i + 1} av ${slides.length}: ${slide.label}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold-2" : "w-2.5 bg-ink/40 hover:bg-ink/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
