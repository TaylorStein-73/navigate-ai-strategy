# Design System — Navigate AI Strategy

> **Memorable thing:** This is a system, not a checklist. Every visual decision below exists to make that point on contact.

## Product Context
- **What this is:** An internal microsite that renders the Navigate AI Strategy as an editorial-magazine experience — five cascade levels, each rendered as its own page with its own visual treatment.
- **Who it's for:** Peer execs / cross-functional leaders at Navigate. The audience whose forward to their team is the highest-leverage outcome.
- **Space/industry:** Healthcare AI / Patient Journey Management. Internal artifact, not external marketing.
- **Project type:** Editorial microsite — multi-page, content-led, no app surface area.

## Aesthetic Direction
- **Direction:** Editorial / Magazine
- **Decoration level:** Intentional — section ornaments (rules, numerals, drop caps where they earn it). No purple gradients, no decorative blobs, no 3-column-icon-grid.
- **Mood:** Considered. Executive-grade. Reads like a thoughtful magazine feature, not a Confluence page or a marketing landing.
- **Memorable-thing service:** Every page treatment exists to prove the strategy is a system whose parts have different shapes. A uniform card template would undermine the thesis.
- **Reference precedent:** Magazine spreads have always solved "same identity, different shape per article." That's the right precedent.

## Information Architecture
- **Routing:** Multi-page. Landing at `/`, then one page per cascade level:
  - `/` — Landing (poster / contents)
  - `/01-vision` — Product Vision
  - `/02-who-ai-serves` — Who AI Serves
  - `/03-differentiators` — Our Differentiators
  - `/04-foundations` — Foundations
  - `/05-execution` — How We Execute
- **Cascade order is preserved as URL order** — defended in /office-hours as dependency-chained (each section depends on the prior). Order is non-negotiable.
- **Shared chrome on every page:** Masthead (kicker + title link + meta), prev/next nav at footer, position indicator (e.g., "03 of 05"), home link in masthead.

## Per-Page Treatments

Each page's body composition matches the natural shape of its content. The chrome stays constant; the body changes.

| Page | Treatment | Why this shape |
|---|---|---|
| **00 Landing** | **Poster / contents** — full-bleed cover with title, byline, thesis pull-quote, and 5-section magazine-TOC laid out as numbered columns. One screen for the index; no scrolling required to scan. | First impression. Tells the exec "this is a system you can scan" before clicking in. |
| **01 Vision** | **Manifesto** — oversized opening claim (Fraunces 144 opsz), long-form essay below at narrow measure (60-64ch). Drop cap on first paragraph optional. | One claim, prose-shaped. First page of a manifesto, not a card. |
| **02 Stakeholders** | **Triptych + cyclical flow** — page opens with a cyclical-flow SVG (Patients top / Staff bottom-left / Admin bottom-right, three curved arrows clockwise labeled with the AI-mediated work on each leg), then drops into three parallel triptych panels with identical internal structure. Mobile: SVG collapses to a one-line "Patients → Staff → Admin → Patients" card. | The cycle gives the 5-second scan; the triptych is the 45-second drill. Together they encode "three audiences, three workloads, one system in motion." |
| **03 Differentiators** | **Stacked moats** — five numbered cards in vertical sequence, each with a subtle horizontal offset (compounding visual). Increasing visual weight from #01 to #05. | The argument is that the moats compound. The shape needs to make compounding visible, not just claim it. |
| **04 Foundations** | **System diagram** — actual SVG architecture diagram. Top row: product surfaces (journey data, AI config, knowledge layer). Bottom row: engineering infrastructure (substrate, integration, context, model abstraction). Lines/connectors show what reads/writes what. | This is THE "system, not checklist" page. If foundations renders as bullet cards, the thesis fails. |
| **05 Execution** | **Timeline + featured PoC hero + agent library** — Phase 1 stop holds: a featured-PoC hero card (screenshot of the Patient Journey Mapping interface + brand-accent framing + cross-link to Foundations), followed by the 3-column stakeholder agent library. Phase 2 keeps its bulleted deliverables list. Commercial track as a parallel card below. | The featured hero elevates the one PoC that's actually a foundation (not an agent). The library handles the agent inventory. Two layers of visual prominence, both honest. |

## Typography (EngagedMD Tidal Design System)

All tokens are defined in `src/styles/engagedmd-tokens.css` (lifted from the EngagedMD design skill). That file loads Figtree, Newsreader, Roboto, Inter, and Material Symbols Rounded from Google Fonts.

- **Display (page H1, manifesto opening, landing-cover title):** **Newsreader** — variable serif, opsz 6..72, wght 300..600.
  - CSS variable: `var(--font-display)`
  - Why: editorial serif that pairs with sans body. Substitute for paid Recoleta in the Tidal system; swap if Recoleta license arrives later.
- **Body / argument prose / UI headings:** **Figtree** — sans-serif, wght 300..700.
  - CSS variable: `var(--font-sans)`
  - Why: EngagedMD's primary typeface. Humanist sans that holds long-form text and chrome equally well.
- **Buttons / chips:** **Roboto** — MUI default. `var(--font-mui)`. Not used in this microsite (no buttons except the home link), but available.
- **Caption / micro labels:** **Inter** — `var(--font-ui)`. Used by `.t-caption` class. Not used in this microsite.
- **Mono:** **None.** EngagedMD has no mono. V2's `--font-mono` references were replaced with `var(--font-sans)` + uppercase letterspacing (see `.t-overline` and the per-page `.section-numeral`, `.kicker`, `.dir` classes).
- **Type scale** (from `colors_and_type.css`):
  - h1 (cover hero): Newsreader Light, 96px / 112, letter-spacing -1.5px
  - h3 (cover wordmark / module title): Newsreader, 48px / 56
  - h4 (page hero): Newsreader, 34px / 42, letter-spacing 0.25px
  - h5 (page header): Figtree 600, 24px / 32
  - h6 (card titles): Figtree 500, 20px / 32, letter-spacing 0.15px
  - body1 (paragraph): Figtree 400, 16px / 24, letter-spacing 0.15px
  - body2 (secondary): Figtree 400, 14px / 20, letter-spacing 0.17px
  - overline (eyebrow / kickers): Figtree 400, 14px, letter-spacing 1px, ALL CAPS
  - Per-page section-numeral, position indicator: Figtree 500, ~0.78rem, ALL CAPS, letter-spacing 0.14em–0.16em
  - Landing cover title: clamp(3rem, 8vw, 6rem), Newsreader 400-500, letter-spacing -0.035em
  - Manifesto title (01 Vision): clamp(2.5rem, 6.5vw, 4.5rem), Newsreader 500

## Color (EngagedMD Tidal Design System)

- **Approach:** Restrained — brand teal accent on warm-neutral surfaces. Magenta strictly reserved (NOT used anywhere in this microsite).
- **Tokens** (from `engagedmd-tokens.css`):
  - `--brand-primary` `#005459` — dark teal. Used for: links, the accent word "Strategy" in cover title, section numerals, system-diagram strokes, pull-quote rules, hover states.
  - `--brand-primary-hover` `#004045`, `--brand-primary-press` `#003237` — interactive states.
  - `--brand-secondary` `#FFF2E3` — cream. Used as subtle warm-surface accent (Vision atmosphere tint, hover backgrounds, OG image fills).
  - `--brand-accent` `#DF499F` — magenta. **Reserved. NOT used in the microsite.** Per skill brand rules, only allowed on active-nav indicator and unread-message dot. The site has neither.
  - `--surface-app` `#F7F8F9` — page background (neutral atmosphere).
  - `--surface-page` `#FFFFFF` — content surface (cards, callouts, Foundations product-boxes).
  - `--surface-muted` `#F5F8F8` — quiet surfaces.
  - `--fg-heading` `#343C44` — titles, primary headings.
  - `--fg-primary` `#343C44` — body prose (V2 mapped from `--ink-soft`).
  - `--fg-secondary` `#697887` — chrome, dates, captions.
  - `--fg-link` — alias for `--brand-primary`.
  - `--border-soft` `#DFE3E7` — section rules, card 1px stroke.
  - `--border-strong` `#5E6C7A` — structural lines (Foundations engineering box strokes, phase-item left rule).
- **Per-page atmosphere tints** (derived from EngagedMD tokens via `color-mix(in srgb, ...)`, defined in `Layout.astro` as `--atmos-*`):
  - 00 Landing (default): `var(--surface-app)` — neutral
  - 01 Vision: `color-mix(in srgb, var(--surface-app) 80%, var(--brand-secondary) 20%)` — warm
  - 02 Who AI Serves: `var(--surface-app)` — neutral
  - 03 Differentiators: `color-mix(in srgb, var(--surface-app) 97%, var(--brand-primary) 3%)` — cool
  - 04 Foundations: `color-mix(in srgb, var(--surface-app) 94%, var(--brand-primary) 6%)` — blueprint
  - 05 Execution: `color-mix(in srgb, var(--surface-app) 90%, var(--brand-secondary) 10%)` — paper
- **Semantic** (`--info`, `--success`, `--warning`, `--error`): defined in tokens but not used in this microsite (no toasts, status chips, or alerts).
- **Dark mode:** Not in V1. Light only. EngagedMD itself doesn't ship a dark mode for the patient app.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable to spacious. Tight inside a treatment, generous between treatments.
- **Scale:**
  - 2xs: 4px
  - xs: 8px
  - sm: 12px
  - md: 16px
  - lg: 24px
  - xl: 32px
  - 2xl: 48px
  - 3xl: 64px
  - 4xl: 96px (between major sections)
  - 5xl: 128px (page-to-page transitions, generous footers)

## Layout
- **Approach:** Creative-editorial per-page, unified chrome.
- **Page max-width:** 1180px outer container, 760px for prose pages (Vision), full-bleed for treatments that earn it (Landing, Foundations, Execution).
- **Per-page measure:** 60–64ch for body prose; treatments may go wider when content demands.
- **Border radius:** Minimal. 0 default. 4px only on interactive chrome (buttons, focus indicators). The editorial language is rectilinear.
- **Grid:** Desktop is mostly single-column with treatment-specific exceptions (triptych = 3-col, landing TOC = 5-col, foundations diagram = 2-row layered). Mobile collapses everything to single column.

## Motion
- **Approach:** Intentional — page-turn feeling between routes, minimal within pages.
- **Inter-page navigation:** 240ms opacity fade + 8px horizontal slide-from-right on enter, slide-to-left on exit. Implemented via CSS View Transitions API (Astro 5 has native support).
- **Within-page:** No scrolljacking. No on-scroll animations. CSS hover/focus transitions at 120ms only.
- **Easing:** `ease-out` for enter, `ease-in` for exit, `ease-in-out` for in-place moves.
- **Duration scale:**
  - micro: 80ms (hover state shifts)
  - short: 200ms (small transforms, chevron rotation)
  - medium: 240ms (page transitions)
  - long: 400ms (reserved, currently unused)
- **Reduced motion:** All transitions, slides, fades disabled when `prefers-reduced-motion: reduce`. Page transitions become instant cuts.

## Components

Shared across all pages:
- **Masthead** — Tidal cresting-wave mark (Landing only) or EngagedMD wordmark (inner pages), kicker (`Internal Strategy · Draft v1`), title (linked to home, Newsreader, "Strategy" in teal accent), meta (owner + date on Landing), position indicator on inner pages (`03 / 05`)
- **SectionNumeral** — Figtree uppercase, two-digit format (`01`, `02`, ...). Always paired with title.
- **PrevNextNav** — bottom of every inner page. Shows prev section title and next section title. Cascade-order-aware. Labels ALL CAPS Figtree.
- **PageFooter** — disclaimer (`Internal — not for external distribution.`) + return-to-home link

## Brand Rules (enforced — never break)

Inherited verbatim from the EngagedMD design skill:

1. **No emoji** in product UI. (None used.)
2. **No purple** `#9747FF`. (Figma annotation overlay color, not a brand color. None used.)
3. **No invented gradients.** Flat fills throughout. (None used.)
4. **Magenta** `#DF499F` is reserved for active-nav indicator and unread-message dot. **Never** on buttons or backgrounds. (Not used anywhere.)
5. **Cards** = 16px radius (`--radius-card`), 1px divider stroke (`--border-soft`), `--shadow-e1`. Never a colored left-border accent. (Applied to: Differentiators moats, Execution parallel callout. Foundations product/eng boxes are SVG with 4px radius — they're diagram shapes, not UI cards.)
6. **Sentence case** everywhere except eyebrow / overline / position labels and tab labels (ALL CAPS with letter-spacing).

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-26 | Initial design system created via /design-consultation | Pivot from V1 single-page progressive disclosure to multi-page editorial architecture |
| 2026-05-26 | Memorable thing: "This is a system, not a checklist" | Selected from 4 options; anchors all per-page treatment decisions |
| 2026-05-26 | Editorial / Magazine aesthetic | Magazines are the precedent for "same identity, different shape per article" |
| 2026-05-26 | Cascade order preserved in URL routing | Taylor's defended argument from /office-hours: strategy logic is dependency-chained |
| 2026-05-26 | (V2) Fraunces + Source Serif 4 + JetBrains Mono | Variable display serif, readable body, refined mono; all free Google Fonts |
| 2026-05-26 | Per-page atmosphere tints kept (4% saturation) | Subtle differentiation without breaking unity |
| 2026-05-26 | Page-turn motion (240ms fade + 8px slide) | "Reading a magazine page" feel; respects reduced-motion |
| 2026-05-26 | Light mode only for V1 | Dark mode adds work without serving the memorable thing yet |
| 2026-05-26 | **(V3) Rebrand to EngagedMD Tidal Design System** | Site now reads as official EngagedMD/Navigate artifact instead of one-off editorial. Token-level rebrand only; per-page treatments preserved. |
| 2026-05-26 | (V3) Atmosphere tints kept, derived from brand tokens via `color-mix` | Stays system-faithful; no invented colors |
| 2026-05-26 | (V3) Dropcap on Vision page kept (Newsreader serif on Figtree body) | Single intentional mixed-script moment — manifesto page earns the editorial flourish |
| 2026-05-26 | (V3) Tidal cresting-wave mark on Landing, EngagedMD wordmark on inner pages | Cover gets distinctive mark; inner pages get conservative wordmark |
| 2026-05-26 | (V3) Flat title — "Strategy" in `--brand-primary` teal, no italic | Sans-dominant system; italic accent felt like editorial holdover |
| 2026-05-26 | (V3) Differentiators moat cards adopt EngagedMD card spec | 16-radius, 1px divider stroke, `--shadow-e1`. Hover elevates via `--shadow-e2-button` instead of colored border. |
| 2026-05-26 | (V3) Execution parallel callout converted from left-border to proper card | V2 had `border-left: 4px solid var(--brand-primary)` — brand-rule violation. Replaced with 16-radius card. |
| 2026-05-26 | (V3) Foundations SVG re-colored | Deep blue `#1d3a8a` → teal `#005459`. Eng boxes filled cream `#FFF2E3`. Grid lines `#DFE3E7`. |
| 2026-05-26 | **(V4) Renamed "Who AI Serves" → "Stakeholders"** | More direct, fewer words, matches how peer execs describe the section. URL is now `/02-stakeholders`. |
| 2026-05-26 | (V4) Added cyclical-flow SVG to Stakeholders page | Three stakeholder nodes + three labeled curved arrows showing AI-mediated work on each leg. Static for V1; motion deferred to V2. |
| 2026-05-26 | (V4) Stakeholder nodes use `rx=8`, not 16-radius card spec | Diagram glyphs, not UI cards — same exception already documented for Foundations product/eng boxes. |
| 2026-05-26 | (V4) Mobile fallback: SVG hidden below 640px; replaced with a single Figtree text card showing the cycle as "Patients → Staff → Admin → Patients" | Curved-arc labels are unreadable below ~520px; cleaner to swap idioms than to compress. |
| 2026-05-26 | **(V5) Agent PoC library** on Execution page | Phase 1's bulleted items list replaced with a 3-column stakeholder grid of named agent PoCs (Staff 5 / Patients 2 / Admin 1 — asymmetric by design, reflects real Phase 1 scope). |
| 2026-05-26 | (V5) Status chips: Live / In progress / Planned | 8-radius pills with EngagedMD semantic tokens — success-soft + success-dark for Live, info-soft + info-dark for In progress, surface-quiet + fg-secondary for Planned. Visual status replaces verbose copy. |
| 2026-05-26 | (V5) Optional `url` field per agent; "View live PoC →" link only when set | Future-proof: any agent can become live by editing the MDX and adding a URL. No code changes needed to wire new live PoCs. |
| 2026-05-26 | (V5) Asymmetric column heights are honest, not a bug | Staff column has 5 agents, Admin column has 1. Reflects real Phase 1 concentration. Visual asymmetry communicates where the work is. |
| 2026-05-26 | **(V6) Featured PoC hero** on Execution page | The Patient Journey Mapping interface promoted out of the agent library into its own elevated card above the library. Reason: it's not an agent — it's the foundation the agents reason against. Visual elevation matches strategic role. |
| 2026-05-26 | (V6) Hero card uses embedded screenshot of the live PoC | Captured via gstack browse + screenshot at 1280×800, stored at `/public/pocs/journey-mapping.png`. Embedded at top of card in 16:9 frame. The screenshot does more demo work than text ever could. |
| 2026-05-26 | (V6) Hero card has cross-link to Foundations page | "See the patient journey data model →" navigates to /04-foundations. Makes the foundation/execution relationship explicit and clickable. |
| 2026-05-26 | (V6) JMI removed from `agentLibrary.admin` | Admin column shrinks back to just Insight agent. Library is now strictly agent-focused inventory. No duplication with the hero. |
| 2026-05-26 | (V6) Primary link rendered as outlined button (4-radius) | "View live PoC →" on the hero gets a button-style chip (border + radius-button), distinguishing it from library cards' plain-text links. Outline-only (not filled CTA) — internal exec audience, not marketing. |
| 2026-05-26 | **(V8) Vision page refactored around new product vision** | H1 is now "Every patient feels like the practice's *only* patient." (italic teal accent on "only" — load-bearing word). Manifesto-sub removed (would have duplicated the H1 after the summary became the vision line). First argument paragraph reframed to bridge outcome → means with a bolded "Navigate is the agentic platform that makes this possible." Landing TOC Vision tile now surfaces the vision line; the four other tiles still show their paragraph summaries (asymmetric texture is intentional). |
