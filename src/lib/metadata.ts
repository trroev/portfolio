import type { Metadata } from "next";
import { siteConfig } from "~/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataOptions): Metadata {
  return {
    description,
    openGraph: {
      description,
      images: [{ url: image }],
      locale: "en_US",
      siteName: siteConfig.name,
      title,
      type: "website",
      url: `${siteConfig.url}${path}`,
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
