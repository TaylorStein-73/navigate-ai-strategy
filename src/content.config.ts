import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Page treatments use either the prose fields (summary/argument/evidence) or
 * the structured fields, depending on what fits the section's natural shape.
 * Structured fields are optional — content authors can fall back to prose.
 */
const strategy = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/strategy" }),
  schema: z.object({
    order: z.number().int().min(1).max(5),
    slug: z.string(),
    title: z.string(),
    treatment: z.enum([
      "manifesto",
      "triptych",
      "stacked-moats",
      "system-diagram",
      "timeline",
    ]),
    atmosphere: z.enum(["vision", "who", "differentiators", "foundations", "execution"]),
    summary: z.string(),
    argument: z.string(),
    evidence: z.string(),
    evidenceLink: z.string().url().optional(),

    /** Triptych panels (02 Who AI Serves). Three audiences, parallel structure. */
    panels: z.array(z.object({
      label: z.string(),       // e.g., "FOR STAFF"
      title: z.string(),       // e.g., "AI does the work nobody has time for"
      body: z.string(),        // longer prose
    })).optional(),

    /** Stacked moats (03 Differentiators). Numbered, compounding. */
    moats: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).optional(),

    /** System diagram (04 Foundations). Two layers of named building blocks. */
    diagram: z.object({
      productLayer: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })),
      engineeringLayer: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })),
    }).optional(),

    /** Timeline (05 Execution). Phases on a rail + parallel commercial track. */
    phases: z.array(z.object({
      label: z.string(),    // e.g., "PHASE 1"
      title: z.string(),    // e.g., "Agent PoCs"
      body: z.string(),
      itemsHeading: z.string().optional(),  // optional eyebrow above items list
      items: z.array(z.string()).optional(),
      output: z.string().optional(),         // closing "Output:" statement after items
    })).optional(),
    parallel: z.object({
      label: z.string(),
      title: z.string(),
      body: z.string(),
      items: z.array(z.string()).optional(),
    }).optional(),

    /**
     * Featured PoC hero (05 Execution). Singular per section — used when one
     * PoC deserves elevation above the library (e.g., the Patient Journey
     * Mapping interface, which is a foundation, not an agent).
     */
    featuredPoC: z.object({
      eyebrow: z.string(),
      name: z.string(),
      body: z.string(),
      status: z.enum(["live", "in-progress", "planned"]),
      url: z.string().url().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      crossLinkLabel: z.string().optional(),
      crossLinkHref: z.string().optional(),
    }).optional(),

    /**
     * Agent PoC library (05 Execution). Library of example agents grouped by
     * stakeholder. Each agent has a status; only "live" ones surface a "View live
     * PoC →" affordance, and only when `url` is set.
     */
    agentLibrary: z.object({
      staff: z.array(z.object({
        name: z.string(),
        body: z.string(),
        status: z.enum(["live", "in-progress", "planned"]),
        url: z.string().url().optional(),
      })),
      patients: z.array(z.object({
        name: z.string(),
        body: z.string(),
        status: z.enum(["live", "in-progress", "planned"]),
        url: z.string().url().optional(),
      })),
      admin: z.array(z.object({
        name: z.string(),
        body: z.string(),
        status: z.enum(["live", "in-progress", "planned"]),
        url: z.string().url().optional(),
      })),
    }).optional(),
  }),
});

export const collections = { strategy };
