import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import technologyEntries from "~/content/technologies.json";
import { TECHNOLOGY_CATEGORIES } from "~/lib/technologies";

const httpUrl = z.url({
  error: "Enter a full URL starting with http:// or https://",
  protocol: /^https?$/,
});

function withUniqueNames<TEntry extends { name: string }>(
  entries: ReadonlyArray<TEntry>,
): Array<TEntry & { id: string }> {
  const seen = new Set<string>();
  return entries.map((entry) => {
    if (seen.has(entry.name)) {
      throw new Error(`Duplicate technology name: "${entry.name}"`);
    }
    seen.add(entry.name);
    return { ...entry, id: entry.name };
  });
}

const technologies = defineCollection({
  loader: () => withUniqueNames(technologyEntries),
  schema: z.object({
    category: z.enum(TECHNOLOGY_CATEGORIES),
    name: z.string().min(1),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "*.yaml" }),
  schema: ({ image }) =>
    z
      .object({
        alt: z.string().min(1),
        description: z.string().min(1),
        liveUrl: httpUrl.optional(),
        order: z.number().int(),
        repoUrl: httpUrl.optional(),
        screenshot: image(),
        tech: z.array(reference("technologies")).min(1),
        title: z.string().min(1),
      })
      .refine((project) => project.liveUrl || project.repoUrl, {
        error: "Add at least one link — a liveUrl or a repoUrl.",
        path: ["liveUrl"],
      }),
});

export const collections = { projects, technologies };
