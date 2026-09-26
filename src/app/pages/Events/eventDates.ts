import { categoryStyles, events, type ChurchEvent } from "./Events.Data";
import type { Lang } from "../../i18n/LanguageContext";

/** Local calendar date as "YYYY-MM-DD" (uses the visitor's timezone, not UTC). */
function toIsoDate(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Parses "YYYY-MM-DD" as a local date (new Date("YYYY-MM-DD") would be UTC midnight). */
function parseIsoDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** "Saturday, September 26, 2026" (Malayalam month and weekday names for "ml"). */
export function formatLongDate(iso: string, lang: Lang = "en") {
  return parseIsoDate(iso).toLocaleDateString(lang === "ml" ? "ml-IN" : "en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "Fri, September 25, 2026", or "October 1 – 20, 2026" for multi-day events (Malayalam month names for "ml"). */
export function formatEventDate({ date, endDate }: ChurchEvent, lang: Lang = "en") {
  const locale = lang === "ml" ? "ml-IN" : "en-US";
  const start = parseIsoDate(date);
  if (!endDate || endDate === date) {
    return start.toLocaleDateString(locale, {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  const end = parseIsoDate(endDate);
  const month = (d: Date) => d.toLocaleDateString(locale, { month: "long" });
  if (start.getMonth() === end.getMonth()) {
    return `${month(start)} ${start.getDate()} – ${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${month(start)} ${start.getDate()} – ${month(end)} ${end.getDate()}, ${end.getFullYear()}`;
}

export type DateRange = "all" | "today" | "week" | "month";

/** Whether an upcoming (not yet finished) event takes place within the range starting today. */
export function isInRange(event: ChurchEvent, range: DateRange, now = new Date()) {
  if (range === "all") return true;
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (range === "week") end.setDate(end.getDate() + 6);
  if (range === "month") end.setMonth(end.getMonth() + 1, 0);
  return event.date <= toIsoDate(end);
}

/**
 * Events that have not finished yet, soonest first, with display fields attached.
 * An event stays visible through its last day and disappears the next day.
 * This runs in the browser on every render, so past events drop off without a rebuild.
 * For "ml", each event's Malayalam text is used where it exists.
 */
export function getUpcomingEvents(lang: Lang = "en", now = new Date()) {
  const today = toIsoDate(now);
  return events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((e) => ({
      ...e,
      ...(lang === "ml" ? e.ml : undefined),
      ...categoryStyles[e.category],
      displayDate: formatEventDate(e, lang),
    }));
}
