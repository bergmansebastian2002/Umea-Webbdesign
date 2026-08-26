import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { company, contactMailto } from "@/data/site";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section aria-labelledby="kontakt" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <SectionHeading
          kicker="Kontakt"
          title="Kontakta oss"
          intro="Första samtalet är alltid kostnadsfritt - berätta vad du behöver så återkommer vi med ett konkret förslag."
          id="kontakt"
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal">
            <Button href={contactMailto} className="w-full sm:w-auto">
              Kontakta oss
            </Button>

            <ul className="mt-10 space-y-5 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex min-h-11 items-center gap-3 text-mist hover:text-ink"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-2" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="flex min-h-11 items-center gap-3 text-mist hover:text-ink"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-2" />
                  {company.phone}
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3 text-mist">
                <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-2" />
                {company.city}, {company.region}
              </li>
              <li className="flex min-h-11 items-center gap-3 text-mist">
                <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-2" />
                {company.responseTime}
              </li>
            </ul>
          </div>

          <div className="reveal rounded-2xl border border-line bg-panel p-7 md:p-9">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
