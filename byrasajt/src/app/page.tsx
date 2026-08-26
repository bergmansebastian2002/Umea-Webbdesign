import { buildMetadata } from "@/lib/seo";
import About from "@/components/sections/About";
import AiData from "@/components/sections/AiData";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";

export const metadata = buildMetadata({
  title: "Umeå Webbdesign - Hemsidor som hjälper företag att växa",
  description:
    "Webbyrå i Umeå. Vi designar och bygger snabba, moderna hemsidor för " +
    "företag i Umeå och resten av Sverige. Kostnadsfritt första möte.",
  path: "/",
});

export default function StartPage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <AiData />
      <Contact />
    </>
  );
}
