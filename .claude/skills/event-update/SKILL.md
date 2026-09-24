---
name: event-update
description: Update the church website's events from a weekly parish announcement PDF (ariyippukal) written in Malayalam. Translates the notice into proper English, extracts every dated program into src/app/pages/Events/Events.Data.ts, removes finished events, and validates the result. Use when the user shares an announcement / ariyippu / notice PDF, or asks to update the events from a PDF.
---

# Event Update

Turn a Malayalam parish announcement PDF (St. Mary's Forane Church, Chalakudy) into English entries in the events data file.

## Files

- `src/app/pages/Events/Events.Data.ts`: the only file you normally edit. It holds the `events` array, the `ChurchEvent` type and `categoryStyles`.
- `src/app/pages/Events/eventDates.ts`: hides past events at runtime and handles date formatting and range filters. Don't change it for a data update.
- The Events page and the Home page (which shows the next 3 events) both read from this data, so nothing else needs editing.

Read `Events.Data.ts` first. Follow its current shape, which may have changed since this skill was written.

## Steps

1. **Read the whole PDF.** Find the notice date in the header (`അറിയിപ്പ് DD.MM.YYYY`, usually a Sunday). All relative dates are worked out from it:
   - `ഇന്ന്` (today) = the notice date
   - `ഈ ആഴ്ച` (this week) = the notice date to the following Saturday
   - `അടുത്ത ഞായറാഴ്ച` (next Sunday) = the notice date + 7
   - `ഈ ഞായറാഴ്ച` (this Sunday) is ambiguous: use the notice date, and list it under "Needs confirmation" in your reply.
   - A weekday with no date (e.g. `വെള്ളിയാഴ്ച`) = the next such weekday after the notice date.
   - Check every computed date against its weekday with `node -e "console.log(new Date(2026,8,25).toDateString())"`. The PDF usually gives both, and if they disagree, flag it.

2. **Translate each numbered item into proper English.** Write natural sentences, not word-for-word. Use the glossary below, keep proper names, and don't invent details the notice doesn't give.

3. **Decide what becomes an event.** Anything with a date, or a date you can work out, and something to attend or take part in becomes an event:
   - Masses, feasts and special days (the `ഈയാഴ്ചയിലെ വിശേഷ ദിവസങ്ങൾ` list)
   - Meetings, gatherings, house visits, church cleaning, quizzes, camps, processions
   - Weekly chapel devotions (Litany/Novena): add only this week's dated instances
   - Multi-day programs: set `date` to the first day and `endDate` to the last
   - A list of dates for the same program (e.g. Raza Qurbana by zone): one event per date. Use a `.map()` over a `[date, zone]` table when there are many, as the current file does.

   These don't become events: offerings received (`സ്തോത്രക്കാഴ്ച`, `സമർപ്പണങ്ങൾ`), aid given (`സഹായങ്ങൾ`), thank-you notes, and booking deadlines that have already passed. If they give useful practical detail (hall tickets, fees, who to pay), put it in the description of the related event.

4. **Write each event** in the `ChurchEvent` shape:
   - `title`: short Title Case name. Add the place or unit when it tells events apart, e.g. `"Priests' House Visit and Blessing – Unit 48"`.
   - `category`: one of the keys of `categoryStyles`:
     - `Liturgy`: Sundays and liturgical seasons, and which units lead the Masses
     - `Feast`: saints' feasts, solemn feast Masses, closing celebrations
     - `Devotion`: Rosary, Litany, Novena, Adoration, prayer meetings
     - `Meeting`: council, association and general body meetings, family unit gatherings
     - `Formation`: catechism, quizzes, camps, classes
     - `Service`: cleaning, house visits, collections, auctions, charity drives
     - `Remembrance`: Masses and prayers for the departed
   - `description`: one to three plain English sentences with who, what, and any instructions for parishioners.
   - `date` / `endDate`: `"YYYY-MM-DD"` strings.
   - `time`: `"6:00 PM"`, `"2:00 PM – 3:30 PM"`, `"After the 7:30 AM Holy Mass"`. If the notice gives no time, use the weekday or `"Evening"` or `"As arranged by each unit"`. Never make up a clock time.
   - `location`: use the `MAIN_CHURCH` constant for the parish church. Use the chapel, school or family unit names otherwise.

5. **Update the array.**
   - Remove events whose `endDate ?? date` is before the new notice date. They're hidden already, and removing them keeps the file short.
   - Keep future events that are already there. If the new notice repeats or changes one (a new time or date), update that entry rather than adding a duplicate.
   - Add the new events in date order, under `// ── <section> ──` comments like the existing ones. Update the `// Source:` comment to the new notice date.
   - `title + date` must be unique, because the page uses it as the React key.

6. **Validate.** Run all three:
   ```sh
   node .claude/skills/event-update/validate.mts
   npx tsc --noEmit -p . 2>&1 | grep "pages/Events"
   NODE_ENV=production npx rspack build 2>&1 | tail -1
   ```
   The validator checks date formats, date order, categories and duplicate keys, then prints what is visible today. Fix anything it reports. Ignore any errors `tsc` shows in `App.tsx` and `main.tsx`, which aren't part of the events code. The `grep` shows only errors in the events files.

7. **Reply** with:
   - how many events you added, updated and removed
   - a short list of what's upcoming
   - what you skipped and why
   - **Needs confirmation**: ambiguous dates, missing times, and how you translated names (chapels, schools, places)

   Don't commit unless the user asks.

## Glossary

| Malayalam | English |
|---|---|
| വി. കുർബാന / വിശുദ്ധ കുർബാന | Holy Mass |
| റാസ കുർബാന | Raza Qurbana (solemn Syro-Malabar Mass) |
| ഒപ്പീസ് | Office for the Dead |
| ലദീഞ്ഞ് | Litany |
| നൊവേന | Novena |
| ആരാധന | Adoration |
| ജപമാല / ജപമാലപ്രദക്ഷിണം | Rosary / Rosary procession |
| തിരുനാൾ | Feast |
| സമാപന ആശീർവാദം | Closing blessing |
| വികാരി / വികാരിയച്ചൻ | Vicar |
| വൈദികർ / അച്ചൻ | Priests / Father |
| ഇടവക | Parish |
| പള്ളി | Church (the parish church is `MAIN_CHURCH`) |
| കപ്പേള | Chapel |
| കുരിശുപള്ളി | Chapel (e.g. "Chenathunad Chapel") |
| കുടുംബയൂണിറ്റ് / യൂണിറ്റ് | Family Unit / Unit |
| മേഖല | Zone |
| ഭാരവാഹികൾ | Leaders / office-bearers |
| കേന്ദ്രസമിതി | Central committee |
| പ്രതിനിധിയോഗം | Parish Council meeting |
| ജനറൽബോഡി മീറ്റിംഗ് | General body meeting |
| കുടുംബസമ്മേളനം | Family unit gathering |
| ഭവന സന്ദർശനം | House visit |
| പള്ളി ക്ലീനിങ് | Church cleaning |
| മതബോധനം | Catechism |
| രൂപത | Diocese / diocesan |
| സിമിത്തേരി | Cemetery |
| വിശുദ്ധജലം | Holy water |
| മാതൃവേദി | Mathruvedi (mothers' forum) |
| കെസിവൈഎം | KCYM |
| ജീസസ് യൂത്ത് | Jesus Youth |
| എകെസിസി | AKCC (All Kerala Catholic Congress) |
| സെൻ്റ് വിൻസെൻ്റ് ഡി പോൾ സംഘടന | St. Vincent de Paul Society |
| ഭക്തസംഘടനകൾ | Parish associations |
| ലേലം | Auction |
| ഏലിയ – സ്ലീവ – മൂശെ കാലം | Eliya–Sliva–Moses season |

Place names used before, to keep spellings consistent: St. Antony's Chapel (near the KSRTC bus station), St. Roch's Chapel (`വിശുദ്ധ റോക്കി`), Market Chapel, Lourdes Matha Chapel, Mariyapuram, Chenathunad Chapel, S.H. School, Pax, Kallettumkara. If `Events.Data.ts` already uses a name, use the same spelling.
