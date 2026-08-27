"use client";

import { useState } from "react";

import { company } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const FIELD_CLASSES =
  "w-full rounded-xl border border-line bg-night/60 px-4 py-3 text-sm " +
  "text-ink placeholder:text-mist/60 focus:border-gold-2";

/**
 * Backend-free contact form: validates in the browser, then opens the
 * visitor's mail client with a pre-filled draft to our address.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const found: Errors = {};
    if (name.length < 2) found.name = "Skriv ditt namn.";
    if (!/^\S+@\S+\.\S+$/.test(email)) found.email = "Kontrollera e-postadressen.";
    if (message.length < 5) found.message = "Skriv ett kort meddelande.";
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const body =
      `Hej!%0A%0A${encodeURIComponent(message)}%0A%0A` +
      `Namn: ${encodeURIComponent(name)}%0A` +
      (phone ? `Telefon: ${encodeURIComponent(phone)}%0A` : "") +
      `E-post: ${encodeURIComponent(email)}`;

    window.location.href =
      `mailto:${company.email}?subject=${encodeURIComponent(
        `Förfrågan om ny hemsida - ${name}`,
      )}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kontakt-namn" className="mb-1.5 block text-sm text-mist">
            Namn *
          </label>
          <input
            id="kontakt-namn"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "fel-namn" : undefined}
            className={FIELD_CLASSES}
          />
          {errors.name && (
            <p id="fel-namn" className="mt-1.5 text-sm text-gold-2">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="kontakt-epost" className="mb-1.5 block text-sm text-mist">
            E-post *
          </label>
          <input
            id="kontakt-epost"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "fel-epost" : undefined}
            className={FIELD_CLASSES}
          />
          {errors.email && (
            <p id="fel-epost" className="mt-1.5 text-sm text-gold-2">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="kontakt-telefon" className="mb-1.5 block text-sm text-mist">
          Telefon
        </label>
        <input
          id="kontakt-telefon"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={FIELD_CLASSES}
        />
      </div>

      <div>
        <label htmlFor="kontakt-meddelande" className="mb-1.5 block text-sm text-mist">
          Meddelande *
        </label>
        <textarea
          id="kontakt-meddelande"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "fel-meddelande" : undefined}
          className={FIELD_CLASSES}
        />
        {errors.message && (
          <p id="fel-meddelande" className="mt-1.5 text-sm text-gold-2">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-gold to-gold-2 px-7 py-3.5 text-sm font-semibold text-night transition-all hover:brightness-110 sm:w-auto"
      >
        Öppna i e-post
      </button>

      <p className="text-xs text-mist" role="status">
        {sent
          ? "Ett e-postutkast har öppnats i ditt e-postprogram - skicka det så hör vi av oss."
          : "Formuläret öppnar ett färdigt utkast i ditt e-postprogram - inget skickas förrän du själv trycker på skicka."}
      </p>
    </form>
  );
}
