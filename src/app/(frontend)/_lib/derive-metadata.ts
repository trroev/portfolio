import type { Metadata } from "next";
import { siteConfig } from "~/config/site";
import { pageMetadata } from "~/lib/metadata";
import { derivePageDescription, derivePageTitle } from "~/lib/page-seo";
import { resolveMedia } from "~/lib/resolve-media";
import type { Page } from "~/payload-types";

export function pageToMetadata(page: Page, path: string): Metadata {
  const { meta } = page;
  const metaImage = resolveMedia(meta?.image);

  return pageMetadata({
    description: meta?.description || derivePageDescription(page),
    image: metaImage?.url ?? siteConfig.ogImage,
    path,
    title: meta?.title || derivePageTitle(page),
  });
}
