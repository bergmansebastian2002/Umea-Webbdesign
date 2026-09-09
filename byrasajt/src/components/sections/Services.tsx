import { services, servicesIntro } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section aria-labelledby="tjanster" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <SectionHeading
          kicker="Tjänster"
          title="Vad vi erbjuder"
          intro={servicesIntro}
          id="tjanster"
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="reveal group rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
            >
              <service.icon aria-hidden="true" className="h-7 w-7 text-gold-2" />
              <h3 className="mt-5 text-lg text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
