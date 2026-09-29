/**
 * All fakta om salongen samlas här. Källor och vad som är bekräftat
 * respektive obekräftat står i FAKTA.md i projektroten.
 */

// Förhandsversionen indexeras inte. Sätt INDEXERA=ja i Vercel vid lansering.
export const indexera = process.env.INDEXERA === "ja";

export const foretag = {
  namn: "Din Frisör",
  url: "https://din-frisor.vercel.app",
  gata: "Järnvägstorget 17 A",
  postnummer: "903 28",
  ort: "Umeå",
  telefon: "076-448 30 37",
  telefonLank: "tel:+46764483037",
  facebook: "https://www.facebook.com/profile.php?id=100057658860795",
  kartlank:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Din frisör, Järnvägstorget 17 A, Umeå"),
};

/**
 * OBS: EXEMPELPRISER. Facebook visar inga priser – nivåerna är satta efter
 * jämförbara drop in-salonger i Umeå och MÅSTE bytas mot salongens riktiga
 * prislista innan sajten visas för kund eller lanseras. Se FAKTA.md.
 */
export const priser = [
  { tjanst: "Klippning", pris: 250 },
  { tjanst: "Student", pris: 220 },
  { tjanst: "Pensionär", pris: 200 },
  { tjanst: "Barn till 12 år", pris: 200 },
  { tjanst: "Skägg", pris: 150 },
];

export const oppettider = [
  { dagar: "Måndag–fredag", tid: "10:00–18:00" },
  { dagar: "Lördag", tid: "10:00–17:00" },
  { dagar: "Söndag", tid: "Stängt" },
];

/** Samma tider som ovan, men i schema.org-format för JSON-LD. */
export const oppettiderSchema = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "17:00",
  },
];
