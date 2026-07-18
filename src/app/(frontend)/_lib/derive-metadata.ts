import type { Metadata } from "next";
import { siteConfig } from "~/config/site";
import { pageMetadata } from "~/lib/metadata";
import type { Page } from "~/payload-types";

function deriveDescription(page: Page): string {
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

export function pageToMetadata(page: Page, path: string): Metadata {
  return pageMetadata({
    description: deriveDescription(page),
    path,
    title: page.slug === "home" ? undefined : page.title,
  });
}
