interface SiteConfig {
  title: string;
  description: string;
  author: string;
  keywords: string;
  url: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    site_name: string;
    image: string;
    type: string;
  };
  icons: {
    favicon: string;
    shortcut: string;
    apple: string;
  };
  manifest: string;
}

export const siteConfig: SiteConfig = {
  title: "Trevor Mathiak | Full Stack Developer",
  description:
    "Portfolio website of full stack developer Trevor Mathiak",
  author: "Trevor Mathiak",
  keywords:
    "full stack, web, developer, Trevor, Mathiak, Next.js, React, TailwindCSS, Vercel",
  url: "https://trevormathiak.dev",
  openGraph: {
    title: "Trevor Mathiak | Full Stack Developer",
    description:
      "Portfolio website of full stack developer Trevor Mathiak",
    url: "https://trevormathiak.dev",
    site_name: "Trevor Mathiak | Full Stack Developer",
    image: "https://trevormathiak.dev/screenshot.jpg",
    type: "website",
  },
  icons: {
    favicon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
