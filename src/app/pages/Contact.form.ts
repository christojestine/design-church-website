// Contact form → Google Form (https://forms.gle/mCKmrS8orYt8ieQy6).
// Entry IDs come from the form's published page; if a question is added or re-created in
// Google Forms its ID changes and must be updated here.

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJeb0Drz9I2cqhXUkTU1_AQeJuUfO7SL3rTN99oNQXQMU3tg/formResponse";

const ENTRY = {
  name: "entry.1403105228",
  email: "entry.780351495",
  phone: "entry.1546483829",
  subject: "entry.509821532",
  message: "entry.790383432",
} as const;

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  /** Honeypot: not rendered (display:none), so only bots reading the HTML fill it in. */
  hpTrap: string;
};

export const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 2000 },
} as const;

// Letters and combining marks from any script (so Malayalam works), plus ZWNJ/ZWJ, which
// Malayalam spelling needs, and the punctuation that appears in names.
export const NAME_PATTERN = /^[\p{L}\p{M}‌‍ .'-]+$/u;
export const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
export const PHONE_PATTERN = /^\+?[0-9][0-9 ()-]{5,18}[0-9]$/;
export const HTML_TAG_PATTERN = /<\/?[a-z!][^>]*>/i;
const URL_PATTERN = /(https?:\/\/|www\.)/gi;
export const MAX_LINKS = 2;

export function countLinks(value: string) {
  return (value.match(URL_PATTERN) ?? []).length;
}

/**
 * Cleans a value before it leaves the browser:
 * - Unicode-normalises and trims it;
 * - removes control characters (keeping newlines/tabs only where `multiline`) and the
 *   bidirectional-override characters used to disguise text;
 * - defuses spreadsheet formula injection: the responses sheet can be exported to CSV and
 *   opened in Excel, which would run a value such as `=HYPERLINK(...)` as a formula, so a
 *   leading = + - @ is prefixed with an apostrophe to force it to plain text.
 */
export function sanitize(value: string, { multiline = false, formulaSafe = true } = {}) {
  const controls = multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;
  const cleaned = value
    .normalize("NFC")
    .replace(controls, multiline ? "" : " ")
    .replace(/[\u202A-\u202E\u2066-\u2069]/g, "")
    .trim();
  return formulaSafe && /^[=+\-@]/.test(cleaned) ? `'${cleaned}` : cleaned;
}

/**
 * Posts to the Google Form. Google doesn't send CORS headers, so the request is `no-cors`
 * and the response is opaque: a resolved promise means it was delivered, a rejection means
 * a network failure or timeout.
 */
export async function submitToGoogleForm(values: ContactValues) {
  const body = new URLSearchParams({
    [ENTRY.name]: sanitize(values.name),
    [ENTRY.email]: sanitize(values.email).toLowerCase(),
    // Validated to digits, spaces, + ( ) - only, so a leading + is a country code, not a formula.
    [ENTRY.phone]: sanitize(values.phone, { formulaSafe: false }),
    [ENTRY.subject]: sanitize(values.subject),
    [ENTRY.message]: sanitize(values.message, { multiline: true }),
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    await fetch(FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      credentials: "omit",
      referrerPolicy: "no-referrer",
      body,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

// Client-side cooldown so the form can't be used to flood the sheet from one browser.
const COOLDOWN_KEY = "contact-last-sent";
export const COOLDOWN_MS = 60_000;

export function cooldownRemaining() {
  try {
    const last = Number(localStorage.getItem(COOLDOWN_KEY) ?? 0);
    return Math.max(0, last + COOLDOWN_MS - Date.now());
  } catch {
    return 0;
  }
}

export function startCooldown() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    // Storage blocked (private mode etc.): skip the cooldown rather than fail the submit.
  }
}
