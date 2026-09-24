import type { Lang, Text } from "./LanguageContext";

/** Text shared by several components. */
export const churchName: Text = {
  en: "St.Mary's Forane Church Chalakudy",
  ml: "സെന്റ് മേരീസ് ഫൊറോന പള്ളി, ചാലക്കുടി",
};

/**
 * "6:00 AM" → "രാവിലെ 6:00", "5:00 PM" → "വൈകിട്ട് 5:00" (Malayalam puts the part of day first).
 * Anything that isn't a plain clock time is returned unchanged.
 */
export function formatClock(time: string, lang: Lang): string {
  const m = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(time.trim());
  if (lang !== "ml" || !m) return time;
  const hour = Number(m[1]);
  const pm = m[3].toUpperCase() === "PM";
  const part = !pm
    ? "രാവിലെ"
    : hour === 12 || hour < 4
      ? "ഉച്ചയ്ക്ക്"
      : hour < 8
        ? "വൈകിട്ട്"
        : "രാത്രി";
  return `${part} ${m[1]}:${m[2]}`;
}
