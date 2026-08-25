import type { Meny } from "@/lib/typer";

/**
 * ============================================================================
 *  MENY - hela restaurangens meny ligger i den här filen.
 * ============================================================================
 *
 *  Så här uppdaterar du menyn:
 *   1. Ändra `rubrik` när säsongen byts, t.ex. "Meny våren 2027".
 *   2. Lägg till, ta bort eller redigera rätter i `ratter`-listorna nedan.
 *   3. Spara. Sajten byggs om automatiskt vid nästa push till GitHub.
 *
 *  Fält per rätt:
 *   namn         (krävs)  - rättens namn
 *   beskrivning  (valfri) - kort rad med råvaror
 *   pris         (valfri) - siffra i kronor, utan "kr"
 *   prisText     (valfri) - text istället för pris, t.ex. "Dagens pris"
 *   markningar   (valfri) - t.ex. ["Vegetariskt"], ["Glutenfri"], ["Vegansk"]
 *   populär      (valfri) - true lyfter fram rätten visuellt
 */
export const meny: Meny = {
  rubrik: "Meny",
  ingress:
    "Menyn följer årstiderna och skrivs om var sjätte vecka. Allt bröd, all pasta och all glass gör vi själva.",
  fotnot:
    "Berätta för oss om du har allergier eller särskilda kostbehov - vi anpassar det mesta.",

  sektioner: [
    {
      id: "forratter",
      rubrik: "Förrätter",
      ratter: [
        {
          namn: "Rimmad röding",
          beskrivning: "Pepparrot, inlagd gurka, dillolja och knäckebröd",
          pris: 165,
          populär: true,
        },
        {
          namn: "Toast Skagen",
          beskrivning: "Handskalade räkor, dill, citron och löjrom på brioche",
          pris: 185,
        },
        {
          namn: "Rostad rotselleri",
          beskrivning: "Brynt smör, hasselnöt, äpple och timjan",
          pris: 145,
          markningar: ["Vegetariskt"],
        },
        {
          namn: "Charkbricka",
          beskrivning: "Husets torkade charkuterier, syltlök och surdegsbröd",
          pris: 195,
        },
      ],
    },
    {
      id: "varmratter",
      rubrik: "Varmrätter",
      ratter: [
        {
          namn: "Halstrad fjällröding",
          beskrivning: "Potatispuré, brynt smör, ärtor och sotad citron",
          pris: 335,
          populär: true,
        },
        {
          namn: "Ryggbiff från Västerbotten",
          beskrivning: "Rotfrukter, gräddstuvad svamp och rödvinssky",
          pris: 395,
        },
        {
          namn: "Renskav",
          beskrivning: "Kantarell, lingon, pressgurka och potatis",
          pris: 315,
        },
        {
          namn: "Svartrot och pärlkorn",
          beskrivning: "Rostad svartrot, pärlkorn, grönkål och örtolja",
          pris: 265,
          markningar: ["Vegansk"],
        },
        {
          namn: "Dagens fångst",
          beskrivning: "Fråga oss vad som kom in i morse",
          prisText: "Dagspris",
        },
      ],
    },
    {
      id: "efterratter",
      rubrik: "Efterrätter",
      ratter: [
        {
          namn: "Hjortronparfait",
          beskrivning: "Vit choklad, rostad havre och citronmeliss",
          pris: 135,
        },
        {
          namn: "Chokladtryffel",
          beskrivning: "Mörk choklad, flingsalt och gräddglass",
          pris: 125,
          markningar: ["Glutenfri"],
        },
        {
          namn: "Ostbricka",
          beskrivning: "Tre nordiska ostar, kex och hjortronsylt",
          pris: 165,
        },
      ],
    },
    {
      id: "lunch",
      rubrik: "Lunch",
      beskrivning: "Serveras tisdag till fredag 11.00-14.00. Sallad, bröd och kaffe ingår.",
      ratter: [
        {
          namn: "Dagens rätt",
          beskrivning: "Byts varje dag - se vår Facebook för veckans lista",
          pris: 145,
        },
        {
          namn: "Dagens vegetariska",
          pris: 145,
          markningar: ["Vegetariskt"],
        },
        {
          namn: "Husets sallad",
          beskrivning: "Säsongens grönsaker, kikärtor, örter och surdeg",
          pris: 155,
          markningar: ["Vegansk"],
        },
      ],
    },
    {
      id: "dryck",
      rubrik: "Dryck",
      beskrivning: "Ett litet, personligt urval. Fråga oss gärna om vad som passar till maten.",
      ratter: [
        { namn: "Glas vin", beskrivning: "Rött, vitt eller orange", pris: 115 },
        { namn: "Flaska vin", prisText: "Från 495 kr" },
        { namn: "Öl från Västerbotten", pris: 89 },
        { namn: "Alkoholfri cocktail", beskrivning: "Säsongens frukt, örter och bubbel", pris: 95 },
        { namn: "Kaffe", pris: 39 },
      ],
    },
  ],
};

export default meny;
