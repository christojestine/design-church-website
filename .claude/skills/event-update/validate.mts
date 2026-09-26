// Validates src/app/pages/Events/Events.Data.ts and prints the events visible today.
// Run from the project root: node .claude/skills/event-update/validate.mts
import path from "node:path";
import { pathToFileURL } from "node:url";

const dataFile = path.resolve("src/app/pages/Events/Events.Data.ts");
const { events, categoryStyles, eventsLastUpdated } = await import(pathToFileURL(dataFile).href);

const errors: string[] = [];
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const validDate = (s: string) => {
  if (!isoDate.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
};

const keys = new Set<string>();
for (const e of events) {
  const label = `"${e.title}" (${e.date})`;
  if (!e.title?.trim()) errors.push(`${label}: missing title`);
  if (!e.description?.trim()) errors.push(`${label}: missing description`);
  if (!e.time?.trim()) errors.push(`${label}: missing time`);
  if (!e.location?.trim()) errors.push(`${label}: missing location`);
  if (!(e.category in categoryStyles)) errors.push(`${label}: unknown category "${e.category}"`);
  if (!validDate(e.date)) errors.push(`${label}: invalid date "${e.date}"`);
  if (e.endDate !== undefined) {
    if (!validDate(e.endDate)) errors.push(`${label}: invalid endDate "${e.endDate}"`);
    else if (e.endDate < e.date) errors.push(`${label}: endDate is before date`);
  }
  // The site has a Malayalam mode, so every event needs its Malayalam text too.
  for (const field of ["title", "description", "time", "location"]) {
    if (!e.ml?.[field]?.trim()) errors.push(`${label}: missing Malayalam ml.${field}`);
  }
  const key = e.title + e.date;
  if (keys.has(key)) errors.push(`${label}: duplicate title + date`);
  keys.add(key);
}

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

// Shown on the Events page as "Last updated"; it should be the day the list was edited.
if (typeof eventsLastUpdated !== "string" || !validDate(eventsLastUpdated)) {
  errors.push(`eventsLastUpdated: missing or invalid date "${eventsLastUpdated}"`);
} else if (eventsLastUpdated > today) {
  errors.push(`eventsLastUpdated: ${eventsLastUpdated} is in the future`);
} else if (eventsLastUpdated !== today) {
  console.warn(`Note: eventsLastUpdated is ${eventsLastUpdated}, not today (${today}). Set it to today if you just edited the list.
`);
}
const visible = events
  .filter((e: any) => (e.endDate ?? e.date) >= today)
  .sort((a: any, b: any) => a.date.localeCompare(b.date));

console.log(`Total events: ${events.length} | visible today (${today}): ${visible.length} | already past: ${events.length - visible.length}\n`);
for (const e of visible) {
  const when = e.endDate ? `${e.date} → ${e.endDate}` : e.date;
  const weekday = new Date(e.date + "T00:00").toLocaleDateString("en-US", { weekday: "short" });
  console.log(`${when.padEnd(23)} ${weekday}  [${e.category}] ${e.title} — ${e.time}`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("\nAll events valid.");
