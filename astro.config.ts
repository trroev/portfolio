import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";
import { siteConfig } from "./src/config/site";

export default defineConfig({
  adapter: vercel(),
  env: {
    schema: {
      CONTACT_TO_EMAIL: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      RESEND_API_KEY: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
    },
  },
  fonts: [
    {
      cssVariable: "--font-geist",
      name: "Geist",
      provider: fontProviders.google(),
      styles: ["normal"],
      subsets: ["latin"],
      weights: ["100 900"],
    },
    {
      cssVariable: "--font-space-grotesk",
      name: "Space Grotesk",
      provider: fontProviders.google(),
      styles: ["normal"],
      subsets: ["latin"],
      weights: ["300 700"],
    },
  ],
  integrations: [react(), sitemap()],
  output: "static",
  redirects: {
    "/sitemap.xml": "/sitemap-index.xml",
  },
  site: siteConfig.url,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
