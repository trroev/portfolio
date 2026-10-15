import { cache } from "react";
import { getPayloadClient } from "~/lib/payload";
import type { Page } from "~/payload-types";

export const getPage = cache(async (slug: string): Promise<Page | null> => {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "pages",
      depth: 2,
      limit: 1,
      where: {
        and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
      },
    });
    return docs[0] ?? null;
  } catch (error) {
    console.error(`Failed to load the "${slug}" page from the CMS:`, error);
    throw error;
  }
});

export type PublishedPageRef = Pick<Page, "slug" | "updatedAt">;

export const getPublishedPageRefs = cache(
  async (): Promise<Array<PublishedPageRef>> => {
    try {
      const payload = await getPayloadClient();
      const { docs } = await payload.find({
        collection: "pages",
        depth: 0,
        limit: 100,
        select: { slug: true, updatedAt: true },
        where: { _status: { equals: "published" } },
      });
      return docs.map(({ slug, updatedAt }) => ({ slug, updatedAt }));
    } catch (error) {
      console.error("Failed to load page refs from the CMS:", error);
      throw error;
    }
  }
);

export const getPageSlugs = cache(async (): Promise<Array<string>> => {
  const refs = await getPublishedPageRefs();
  return refs.map((ref) => ref.slug);
});
