import type { APIRoute } from "astro";
import { siteConfig } from "~/config/site";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", siteConfig.url).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
