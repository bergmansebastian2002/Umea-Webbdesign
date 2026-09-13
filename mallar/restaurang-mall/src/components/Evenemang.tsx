import Image from "next/image";

import { restaurang } from "@/lib/kund";
import { bildProps } from "@/lib/bilder";
import type { Evenemang as EvenemangPost } from "@/lib/typer";
import Sektion from "@/components/Sektion";

/**
 * Evenemang och erbjudanden: afterwork, julbord, dagens lunch m.m.
 * Fylls i via `evenemang` i kundens config; utan poster visas inget.
 * Poster med `utvald` visas som ett brett kort med bild bredvid texten.
 */
export default function Evenemang() {
  const evenemang = restaurang.evenemang;
  if (!evenemang || evenemang.length === 0) return null;

  const sektion = restaurang.evenemangSektion;
  const harBilder = evenemang.some((post) => post.bild);
  const antalOvriga = evenemang.filter((post) => !post.utvald).length;

  return (
    <Sektion
      etikett={sektion?.etikett ?? "På gång"}
      rubrik={sektion?.rubrik ?? "Evenemang och erbjudanden"}
      ingress={sektion?.ingress}
      className="border-y border-ram bg-yta"
    >
      <ul
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${
          harBilder && antalOvriga >= 3 ? "lg:grid-cols-3" : ""
        }`}
      >
        {evenemang.map((post) =>
          post.utvald ? (
            <UtvaldPost key={post.rubrik} post={post} />
          ) : (
            <Post key={post.rubrik} post={post} />
          ),
        )}
      </ul>
    </Sektion>
  );
}

function PostText({ post, stor = false }: { post: EvenemangPost; stor?: boolean }) {
  return (
    <>
      {post.datumText && <p className="etikett">{post.datumText}</p>}
      <h3 className={`mt-2 font-rubrik ${stor ? "text-3xl md:text-4xl" : "text-2xl"}`}>
        {post.rubrik}
      </h3>
      <p
        className={`mt-3 leading-relaxed text-dampad ${stor ? "text-base md:text-lg" : "flex-1"}`}
      >
        {post.beskrivning}
      </p>
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
    </>
  );
}

function PostBild({ post, sizes }: { post: EvenemangPost; sizes: string }) {
  if (!post.bild) return null;
  return (
    <Image
      src={post.bild}
      alt={post.bildAlt ?? ""}
      fill
      loading="lazy"
      sizes={sizes}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      {...bildProps(post.bild)}
    />
  );
}

function Post({ post }: { post: EvenemangPost }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-mall border border-ram bg-bakgrund shadow-kort transition-shadow duration-300 hover:shadow-svav">
      {post.bild && (
        <div className="relative aspect-3/2 overflow-hidden">
          <PostBild post={post} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <PostText post={post} />
      </div>
    </li>
  );
}

function UtvaldPost({ post }: { post: EvenemangPost }) {
  return (
    <li className="group grid grid-cols-1 overflow-hidden rounded-mall border border-ram bg-bakgrund shadow-kort transition-shadow duration-300 hover:shadow-svav md:col-span-full md:grid-cols-2">
      {post.bild && (
        <div className="relative aspect-4/3 overflow-hidden md:aspect-auto md:min-h-[26rem]">
          <PostBild post={post} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      )}
      <div className="flex flex-col justify-center p-8 md:p-12">
        <PostText post={post} stor />
      </div>
    </li>
  );
}
