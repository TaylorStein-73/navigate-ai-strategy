# Navigate AI Strategy

Internal microsite that renders the Navigate AI Strategy as a multi-page editorial experience.

Audience: peer execs / cross-functional leaders at Navigate.
Owner: Taylor Stein.

The strategy is the agentic platform for Patient Journey Management. Each cascade level
gets its own page treatment: Vision is a manifesto, Stakeholders is a triptych with a
cyclical-flow graphic, Differentiators are stacked moats, Foundations is a system
diagram, Execution is a phase rail with a featured PoC and a stakeholder-grouped agent
library.

## Stack

- [Astro 5](https://astro.build/) static site
- MDX content with explicit frontmatter slots (`summary`, `argument`, `evidence`,
  per-page structured fields like `panels`, `moats`, `diagram`, `phases`, `agentLibrary`,
  `featuredPoC`)
- EngagedMD Tidal Design System tokens (Figtree + Newsreader + Material Symbols)
- Astro view transitions (`ClientRouter`) for page-turn motion between routes
- Vercel for hosting; auto-deploy on push to `main`

## Routes

| URL | Treatment |
|---|---|
| `/` | Poster TOC |
| `/01-vision` | Manifesto |
| `/02-stakeholders` | Triptych + cyclical-flow SVG |
| `/03-differentiators` | Stacked moats |
| `/04-foundations` | SVG system diagram |
| `/05-execution` | Phase rail + featured PoC + agent library |

Cascade order is non-negotiable — the strategy logic is dependency-chained.

## Dev

```bash
bun install
bun run dev          # http://localhost:5179 (or default 4321)
bun run build        # runs content lint, then astro build
bun run lint:content # hard cap: 40-word summary, 300-word evidence
```

## Content edits

All page content lives in `src/content/strategy/*.mdx`. The MDX schema (in
`src/content.config.ts`) enforces structure; the content lint enforces word caps
and surfaces soft warnings on L1-to-L2 keyword drift.

To add a live PoC URL to an existing agent in the library, add a `url:` field to that
agent's entry in `05-execution.mdx`. The "View live PoC →" link appears automatically.

## Design system

See [DESIGN.md](DESIGN.md) for the full design system — typography, color tokens,
per-page treatment strategy, brand-critical rules, and the decisions log spanning V1
through current.

## Deploy

Push to `main` on GitHub. Vercel auto-deploys to
[navigate-ai-strategy.vercel.app](https://navigate-ai-strategy.vercel.app).
