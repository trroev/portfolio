import type { Metadata } from "next";
import { siteConfig } from "~/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
};

export const SITEMAP_PATH = "/sitemap.xml";

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  return {
    alternates: { canonical: url },
    description,
    openGraph: {
      description,
      images: [{ url: image }],
      locale: "en_US",
      siteName: siteConfig.name,
      title,
      type: "website",
      url,
    },
    title: { absolute: title },
    twitter: {
      card: "summary_large_image",
      description,
      images: [image],
      title,
    },
  };
}
