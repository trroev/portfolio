import { siteConfig } from "~/config/site";
import { pageHref } from "~/lib/page-href";
import type { Page } from "~/payload-types";

type PageSeoSource = {
  slug?: string | null;
  title?: string | null;
  layout?: Page["layout"];
};

export function derivePageTitle(page: PageSeoSource): string {
  if (page.slug === "home" || !page.title) {
    return siteConfig.title;
  }
  return `${page.title} | ${siteConfig.name}`;
}

export function derivePageDescription(page: PageSeoSource): string {
  for (const block of page.layout ?? []) {
    if (
      (block.blockType === "hero" || block.blockType === "pageIntro") &&
      block.lockup.subheading
    ) {
      return block.lockup.subheading;
    }
  }
  return siteConfig.description;
}

export function derivePageUrl(page: PageSeoSource): string {
  return `${siteConfig.url}${pageHref(page)}`;
}
