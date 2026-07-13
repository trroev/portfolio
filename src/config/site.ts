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
  name: "trroev development",
  ogImage: "/portfolio_splash.jpg",
  resumePath: "/pdf/Trevor_Mathiak_Resume.pdf",
  title: "Trevor Mathiak — trroev development",
  url: "https://trevormathiak.dev",
} as const;

export type SiteConfig = typeof siteConfig;

export type NavItem = Readonly<{ href: string; title: string }>;

export type SocialLinks = Readonly<{ github: string; linkedin: string }>;

export const mainNav = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/services", title: "Services" },
  { href: "/contact", title: "Contact" },
] as const satisfies ReadonlyArray<NavItem>;

export const socialLinks = {
  github: "https://github.com/trroev",
  linkedin: "https://linkedin.com/in/trevormathiak",
} as const satisfies SocialLinks;
