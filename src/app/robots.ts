import type { MetadataRoute } from "next";
import { absoluteUrl, SITEMAP_PATH } from "~/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/", disallow: ["/admin", "/api"], userAgent: "*" },
    sitemap: absoluteUrl(SITEMAP_PATH),
  };
}
