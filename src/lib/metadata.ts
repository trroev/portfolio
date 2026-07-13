import type { Metadata } from "next";
import { siteConfig } from "~/config/site";

type PageMetadataOptions = {
  title?: string;
  description: string;
  path: string;
};

export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const ogTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  return {
    description,
    openGraph: {
      description,
      images: [{ url: siteConfig.ogImage }],
      locale: "en_US",
      siteName: siteConfig.name,
      title: ogTitle,
      type: "website",
      url: `${siteConfig.url}${path}`,
    },
    title,
    twitter: {
      card: "summary_large_image",
      description,
      images: [siteConfig.ogImage],
      title: ogTitle,
    },
  };
}
