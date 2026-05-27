/**
 * Helpers for navigating the cascade. The order is non-negotiable;
 * these helpers center "what's before me" and "what's after me" in one place.
 */
import { getCollection } from "astro:content";

export async function getOrderedSections() {
  const all = await getCollection("strategy");
  return all.map((e) => e.data).sort((a, b) => a.order - b.order);
}

export async function getSectionByOrder(order: number) {
  const all = await getOrderedSections();
  return all.find((s) => s.order === order) ?? null;
}

export async function getPrevNext(order: number) {
  const all = await getOrderedSections();
  const idx = all.findIndex((s) => s.order === order);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
  };
}

export function routeFor(section: { order: number; slug: string }) {
  const num = String(section.order).padStart(2, "0");
  return `/${num}-${section.slug}`;
}
