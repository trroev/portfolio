import type { MetadataRoute } from "next";
import { getPublishedPageRefs } from "~/app/(frontend)/_lib/pages";
import { derivePageUrl } from "~/lib/page-seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPublishedPageRefs();
  return pages.map((page) => ({
    lastModified: page.updatedAt,
    url: derivePageUrl(page),
  }));
}
