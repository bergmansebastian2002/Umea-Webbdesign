import type { ReactNode } from "react";

/** Gemensam layout för policysidor: mörk ingång som övriga sidor, sedan en lugn läsyta med lagom radlängd. */
export default function Policysida({ rubrik, ingress, children }: { rubrik: string; ingress?: string; children: ReactNode }) {
  return (
    <article>
      <header className="monitor-hero border-b border-white/8">
        <div className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
          <h1 className="intro text-[clamp(2.3rem,5vw,3.75rem)] leading-[1.02] font-bold">{rubrik}</h1>
          {ingress && (
            <p className="intro mt-5 text-xl text-grafit" style={{ ["--i" as string]: 1 }}>
              {ingress}
            </p>
          )}
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto max-w-3xl space-y-5 px-5 py-14 text-lg leading-relaxed lg:py-20 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2:first-child]:mt-0 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-magenta">
          {children}
        </div>
      </div>
    </article>
  );
}
