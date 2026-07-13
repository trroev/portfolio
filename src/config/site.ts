export const siteConfig = {
  author: "Trevor Mathiak",
  description:
    "I'm Trevor Mathiak, a full-stack developer. trroev development is my personal practice, building clean and professional web experiences.",
  keywords: [
    "Trevor Mathiak",
    "trroev development",
    "full-stack developer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  /** The brand wordmark. Used person-forward, never as a "we". */
  name: "trroev development",
  ogImage: "/portfolio_splash.jpg",
  title: "Trevor Mathiak — trroev development",
  url: "https://trevormathiak.dev",
} as const;

export type SiteConfig = typeof siteConfig;
