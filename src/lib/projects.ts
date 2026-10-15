import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import { compareByCategory } from "~/lib/technologies";

const FEATURED_PROJECT_LIMIT = 3;

export type Technology = CollectionEntry<"technologies">["data"];

export type Project = Omit<CollectionEntry<"projects">["data"], "tech"> & {
  tech: ReadonlyArray<Technology>;
};

type GetProjectsOptions = {
  featuredOnly?: boolean;
};

async function resolveTech(
  project: CollectionEntry<"projects">,
): Promise<Array<Technology>> {
  const technologies = await Promise.all(
    project.data.tech.map(async (ref) => {
      const entry = await getEntry(ref);
      if (!entry) {
        throw new Error(
          `Project "${project.id}" references unknown technology "${ref.id}"`,
        );
      }
      return entry.data;
    }),
  );
  return technologies.toSorted(compareByCategory);
}

export async function getProjects({
  featuredOnly = false,
}: GetProjectsOptions = {}): Promise<Array<Project>> {
  const entries = await getCollection("projects");
  const sorted = entries.toSorted((a, b) => a.data.order - b.data.order);
  const selected = featuredOnly
    ? sorted.slice(0, FEATURED_PROJECT_LIMIT)
    : sorted;
  return Promise.all(
    selected.map(async (entry) => ({
      ...entry.data,
      tech: await resolveTech(entry),
    })),
  );
}
