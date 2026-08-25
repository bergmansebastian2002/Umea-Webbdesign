import { restaurang } from "@/lib/kund";

/**
 * Slår upp genererad bilddata (mått + suddig platshållare) för en bild.
 * Datat skapas av `npm run bilder -- <slug>` och importeras i kundens config.
 *
 * Returnerar props som kan spridas direkt på <Image>: bilder som saknar
 * data renderas helt enkelt utan blur-platshållare.
 */
export function bildProps(kalla: string): {
  placeholder?: "blur";
  blurDataURL?: string;
} {
  const info = restaurang.bilddata?.[kalla];
  if (!info) return {};
  return { placeholder: "blur", blurDataURL: info.blur };
}

/** Bildens mått, om de finns i bilddatat. */
export function bildMatt(kalla: string): { bredd: number; hojd: number } | null {
  const info = restaurang.bilddata?.[kalla];
  return info ? { bredd: info.bredd, hojd: info.hojd } : null;
}
