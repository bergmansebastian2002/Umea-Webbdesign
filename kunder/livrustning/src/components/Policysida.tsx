import type { ReactNode } from "react";

/** Gemensam layout för policysidor: lugn läsyta, lagom radlängd. */
export default function Policysida({ rubrik, ingress, children }: { rubrik: string; ingress?: string; children: ReactNode }) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <h1 className="text-[clamp(2.3rem,5vw,3.75rem)] leading-[1.02] font-bold">{rubrik}</h1>
        {ingress && <p className="mt-5 text-xl text-grafit">{ingress}</p>}
        <div className="mt-10 space-y-5 text-lg leading-relaxed [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-magenta">
          {children}
        </div>
      </div>
    </article>
  );
}
