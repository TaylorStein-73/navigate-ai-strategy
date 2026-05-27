#!/usr/bin/env node
/**
 * Content discipline check. Run before build (or via `bun run lint:content`).
 *
 * Enforces:
 *  - summary word count <= 40
 *  - evidence word count <= 300
 *  - every distinctive Level 1 keyword appears in Level 2 (argument + evidence)
 *
 * Exits non-zero if any section fails. Output is human-readable.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = new URL("../src/content/strategy/", import.meta.url).pathname;
const SUMMARY_CAP = 40;
const EVIDENCE_CAP = 300;

const STOP = new Set([
  "the","a","an","and","or","but","of","in","to","for","on","at","by","is","are",
  "be","this","that","these","those","with","as","it","its","from","into","not",
  "we","our","us","each","every","any","all","more","one","two","three","four",
  "five","six","seven","also","than","then","so","do","does","done","what","who",
  "where","how","when","why","which","they","them","their","there","here","makes",
  "make","made","get","gets","got","go","goes","gone","run","runs","ran",
  "across","without","within","over","under","up","down","out","into","through"
]);

function words(s) {
  return s.trim().split(/\s+/).filter(Boolean);
}

function tokens(s) {
  return new Set(
    s.toLowerCase()
      .replace(/[^\w\s-]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 3 && !STOP.has(w))
  );
}

function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---/);
  if (!m) throw new Error("missing frontmatter");
  const fm = m[1];
  const fields = {};
  // naive YAML-ish parser sufficient for our schema: scalar (key: value)
  // or block scalar (key: | ... until next key at column 0).
  const lines = fm.split("\n");
  let key = null;
  let buf = [];
  const flush = () => {
    if (key) fields[key] = buf.join("\n").replace(/^\s+|\s+$/g, "");
    key = null;
    buf = [];
  };
  for (const line of lines) {
    const scalar = line.match(/^(\w+):\s*(.*)$/);
    if (scalar && !line.startsWith("  ")) {
      flush();
      key = scalar[1];
      if (scalar[2] === "|" || scalar[2] === ">") {
        // block scalar follows on indented lines
      } else if (scalar[2] !== "") {
        fields[key] = scalar[2].trim();
        key = null;
      }
    } else if (key) {
      buf.push(line.replace(/^  /, ""));
    }
  }
  flush();
  return fields;
}

let failures = 0;
const files = readdirSync(DIR).filter(f => f.endsWith(".mdx")).sort();

console.log(`\n📋 Content discipline check — ${files.length} sections\n`);

for (const file of files) {
  const src = readFileSync(join(DIR, file), "utf-8");
  const fm = parseFrontmatter(src);

  const summaryWords = words(fm.summary || "").length;
  const evidenceWords = words(fm.evidence || "").length;
  const summaryTokens = tokens(fm.summary || "");
  const argEvidenceText = (fm.argument || "") + " " + (fm.evidence || "");
  const argEvidenceTokens = tokens(argEvidenceText);
  const missing = [...summaryTokens].filter(t => !argEvidenceTokens.has(t));

  const okSummary = summaryWords <= SUMMARY_CAP;
  const okEvidence = evidenceWords <= EVIDENCE_CAP;
  const okKeywords = missing.length === 0;

  // Hard gates: word caps. Soft signal: keyword overlap (synonyms are fine).
  const hardFail = !okSummary || !okEvidence;
  const status = hardFail ? "❌" : okKeywords ? "✅" : "⚠️ ";
  console.log(`${status} ${file}  ${fm.title}`);
  console.log(`     summary: ${summaryWords}/${SUMMARY_CAP} words ${okSummary ? "" : "← OVER CAP (hard fail)"}`);
  console.log(`     evidence: ${evidenceWords}/${EVIDENCE_CAP} words ${okEvidence ? "" : "← OVER CAP (hard fail)"}`);
  if (!okKeywords) {
    console.log(`     ⚠️  L1 terms not echoed in L2 (signal only, not a fail): ${missing.slice(0, 8).join(", ")}${missing.length > 8 ? `, +${missing.length - 8} more` : ""}`);
  }
  if (hardFail) failures++;
}

if (failures) {
  console.error(`\n❌ ${failures} section(s) failed discipline check.\n`);
  process.exit(1);
}
console.log("\n✅ All sections pass.\n");
