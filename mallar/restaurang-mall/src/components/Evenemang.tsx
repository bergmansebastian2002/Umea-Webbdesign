import { restaurang } from "@/lib/kund";
import Sektion from "@/components/Sektion";

/**
 * Evenemang och erbjudanden: afterwork, julbord, dagens lunch m.m.
 * Fylls i via `evenemang` i kundens config; utan poster visas inget.
 */
export default function Evenemang() {
  const evenemang = restaurang.evenemang;
  if (!evenemang || evenemang.length === 0) return null;

  return (
    <Sektion
      etikett="På gång"
      rubrik="Evenemang och erbjudanden"
      className="border-y border-ram bg-yta"
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {evenemang.map((post) => (
          <li
            key={post.rubrik}
            className="flex flex-col rounded-mall border border-ram bg-bakgrund p-7 shadow-kort transition-shadow duration-300 hover:shadow-svav"
          >
            {post.datumText && <p className="etikett">{post.datumText}</p>}
            <h3 className="mt-2 font-rubrik text-2xl">{post.rubrik}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-dampad">{post.beskrivning}</p>
            {post.lank && (
              <a
                href={post.lank}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 self-start text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Läs mer och boka <span aria-hidden="true">&#8599;</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Sektion>
  );
}
