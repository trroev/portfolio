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

export const getPageSlugs = cache(async (): Promise<Array<string>> => {
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "pages",
      depth: 0,
      limit: 100,
      select: { slug: true },
      where: { _status: { equals: "published" } },
    });
    return docs.map((doc) => doc.slug);
  } catch (error) {
    console.error("Failed to load page slugs from the CMS:", error);
    throw error;
  }
});
