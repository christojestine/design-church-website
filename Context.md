# Project Context: design-church-website

## Purpose
This repository contains a React + TypeScript website for **St. Mary's Forane Church Chalakudy**.  
It is a multi-page church site with a premium visual style (glassmorphism, gradients, motion effects), and it is deployed to GitHub Pages.

## Mandatory Maintenance Rule
> **Always update this `Context.md` whenever you change project behavior, structure, routes, content model, build/deploy setup, or key dependencies.**

If a PR changes anything that affects how this project works, this file must be reviewed and updated in the same PR.

## Tech Stack
- **Framework/UI:** React 19, React Router, MUI
- **Language:** TypeScript
- **Animation:** `motion` package (from Framer Motion)
- **Carousel:** Swiper
- **3D:** `three`, `@react-three/fiber`, `@react-three/drei`
- **Bundler:** Rspack
- **Package manager:** pnpm (`pnpm-lock.yaml` and `pnpm-workspace.yaml` are committed; npm commands also work)

## Entry Points and App Shell
- App bootstrap: `src/main.tsx`
- Root app + theme provider: `src/app/App.tsx`
- Router definition: `src/app/routes.tsx`
- Shared layout (background, navigation, footer, route outlet): `src/app/Layout.tsx`

## Routing Map
Defined in `src/app/routes.tsx`:
- `/` → Home
- `/about` → About
- `/parish-team` → Parish team
- `/programs` → Program schedule / mass times
- `/events` → Upcoming events
- `/ministries` → Ministries
- `/media` → Media (videos + Instagram embeds)
- `/contact` → Contact form/info
- `*` → NotFound

Production routing uses basename `/design-church-website` for GitHub Pages (configured in `src/app/routes.tsx`).

## Main Pages
- `Home.tsx`: Hero image carousel, welcome story, ministry cards, upcoming events.
- `About.tsx`: Church story/mission with media-rich sections.
- `Programs.tsx`: Mass times, confession times, and special program timings.
- `Events/Events.tsx`: Upcoming events grid with a quick filter bar (date range + category) at the top right.
- `Ministries.tsx`: Ministry catalog with CTA to contact page.
- `Media.tsx`: YouTube embeds and Instagram embed tab view.
- `Contact.tsx`: Client-side form UI and static contact cards.
- `NotFound.tsx`: 404 page with link back home.

## Events Data
- All events live in `src/app/pages/Events/Events.Data.ts` (translated from the weekly parish announcements). Each has an ISO `date` ("YYYY-MM-DD"), an optional `endDate` for multi-day events, and a `category` that sets its icon/colours via `categoryStyles`.
- `src/app/pages/Events/eventDates.ts` → `getUpcomingEvents()` hides events whose last day has passed (visitor's local date, evaluated in the browser, so no rebuild is needed), sorts by date and formats `displayDate`.
- The Events page shows all upcoming events; the Home page shows the next 3 from the same source.
- To update events from a weekly Malayalam announcement PDF, use the `/event-update` Claude Code skill (`.claude/skills/event-update/`). It covers translation, event rules and a validator script.

## Languages (English / Malayalam)
- `src/app/i18n/LanguageContext.tsx`: `LanguageProvider` (wraps the app in `App.tsx`) and `useLanguage()` → `{ lang, setLang, tr }`. Choice comes from `?lang=ml` in the URL, then localStorage, then English; it sets `<html lang>`.
- Text is written as `Text = { en, ml }` next to where it is used; `tr(text)` picks the current language. Malayalam is required by the type, so a missing translation fails the build. Paragraphs with inline bold text use a `lang === "ml" ? ... : ...` branch.
- `src/app/i18n/common.ts`: text shared by several components (church name).
- `components/LanguageToggle.tsx`: header switch (shows the language you can switch to).
- Fonts: Noto Sans/Serif Malayalam sit behind DM Sans/Cinzel in every font stack; Google Fonts only downloads them when Malayalam is on screen. `theme.css` resets letter spacing and raises heading line height under `html:lang(ml)`.
- Navigation shows the full desktop menu from 1280px (English) / 1500px (Malayalam); below that the drawer menu is used.
- Events: `ChurchEvent.ml` holds optional Malayalam title/description/time/location (English is shown where missing); `getUpcomingEvents(lang)` and `formatEventDate(e, lang)` localise text and dates.
- Every page is translated, including names (priests, council, sacristans) in Malayalam script. Data files hold `Text` fields; `formatClock()` in `i18n/common.ts` renders "6:00 AM" as "രാവിലെ 6:00". Events carry Malayalam in `ml` (the `/event-update` validator requires it). `theme.css` shrinks Malayalam headings on phones and lets over-long words wrap, because Malayalam compound words are too wide for the English heading sizes.

## Shared Components
- `Navigation.tsx`: Sticky top navigation + mobile drawer.
- `Footer.tsx`: Quick links, contact details, social links.
- `ScrollReveal.tsx`: In-view reveal wrapper used across pages.
- `MarianBackground3D.tsx`: Lazy-loaded decorative background. A scroll-scrubbed WebP frame sequence (`src/app/assets/Videos/backgroundFrames/`, 120 frames; mobile loads every 2nd) is drawn to a canvas, with a Canvas 2D overlay on desktop. Do not go back to seeking a `<video>` on scroll: `backgroundVideo.webm` has a single keyframe, so each seek decoded up to 120 frames and froze on phones. The .webm is kept only as the source for regenerating frames (ffmpeg command is in the component).
- `ParishTeam.tsx`: Team listing component used as routed page content.
- `figma/ImageWithFallback.tsx`: Image fallback rendering helper.

## Assets and Styling
- Assets: `src/app/assets/` (images, background animation frames, and the source background video).
- Additional imported images: `src/imports/`.
- Global style entry: `src/styles/index.css` (imports fonts + theme).
- Theme variables: `src/styles/theme.css`.
- MUI theme overrides live in `src/app/App.tsx`.

## Build, Dev, Deploy Commands
From `package.json`:
- `npm run dev` (or `pnpm dev`) → local dev server
- `npm run build` (or `pnpm build`) → production build in `dist/`
- `npm run preview` → build + serve
- `npm run deploy` → publish `dist/` via `gh-pages`

## Build/Deploy Notes
- Bundler config: `rspack.config.ts`
- CSS uses Rspack's built-in CSS support (`type: 'css'` rule): no style-loader/css-loader/postcss-loader and no PostCSS config. Those loaders pulled in webpack and js-yaml, which caused `pnpm audit` failures.
- `publicPath` is `/design-church-website/` in production.
- `404.html` is emitted to `dist/` by a small inline plugin in `rspack.config.ts` for GitHub Pages route fallback. Do not switch back to `CopyRspackPlugin`: its glob scanned the whole project (incl. `node_modules`) and added ~15s to every build.
- Router basename and bundler public path must stay aligned.

## Practical Change Guidelines
When changing the project, keep these in sync if affected:
1. Routes in `src/app/routes.tsx`
2. Navigation links in `src/app/components/Navigation.tsx`
3. Footer quick links in `src/app/components/Footer.tsx`
4. Build/deploy details in this `Context.md`

## Suggested Context Update Checklist (for every PR)
- [ ] Did architecture, routes, dependencies, or build/deploy config change?
- [ ] Did any page/component responsibilities materially change?
- [ ] If yes, update this file before merging.
