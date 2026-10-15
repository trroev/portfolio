import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { siteConfig } from "./src/config/site";

export default defineConfig({
  adapter: vercel(),
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
  integrations: [react()],
  output: "static",
  site: siteConfig.url,
  trailingSlash: "never",
  vite: {
    css: {
      postcss: {},
    },
    plugins: [tailwindcss()],
  },
});
