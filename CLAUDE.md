# Navigate AI Strategy — Microsite

An internal Astro + MDX microsite that renders the Navigate AI Strategy doc as an editorial-magazine multi-page experience. Audience: peer execs at Navigate. Owner: Taylor Stein.

## Design System

Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, aesthetic direction, and per-page treatment strategy are defined there. Do not deviate without explicit user approval. In QA / review mode, flag any code that doesn't match `DESIGN.md`.

The memorable thing the design serves: **this is a system, not a checklist.** Every per-page treatment exists to make that point.

## Content discipline

Run `bun run lint:content` before any build. Hard fails: summary >40 words, evidence >300 words. Soft warning: Level 1 keywords missing from Level 2.

## Routing

- `/` — Landing page (poster / contents)
- `/01-vision` — Product Vision (manifesto layout)
- `/02-who-ai-serves` — Who AI Serves (triptych)
- `/03-differentiators` — Our Differentiators (stacked moats)
- `/04-foundations` — Foundations (system diagram)
- `/05-execution` — How We Execute (timeline)

Cascade order is non-negotiable — the strategy is dependency-chained.

## Dev

- `bun run dev` — start dev server (port 4321 default, 5179 via launch.json)
- `bun run build` — runs content lint then `astro build`
- `bun run preview` — preview the production build
