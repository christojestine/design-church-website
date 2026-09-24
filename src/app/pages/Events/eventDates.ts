import { categoryStyles, events, type ChurchEvent } from "./Events.Data";

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

/** "Fri, September 25, 2026", or "October 1 – 20, 2026" for multi-day events. */
export function formatEventDate({ date, endDate }: ChurchEvent) {
  const start = parseIsoDate(date);
  if (!endDate || endDate === date) {
    return start.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  const end = parseIsoDate(endDate);
  const month = (d: Date) => d.toLocaleDateString("en-US", { month: "long" });
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
 */
export function getUpcomingEvents(now = new Date()) {
  const today = toIsoDate(now);
  return events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((e) => ({
      ...e,
      ...categoryStyles[e.category],
      displayDate: formatEventDate(e),
    }));
}
