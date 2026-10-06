import type { Locale } from "./routing";

const rtlLocales = new Set<Locale>(["ar"]);

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return rtlLocales.has(locale) ? "rtl" : "ltr";
}
