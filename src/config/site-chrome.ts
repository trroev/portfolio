import type { Page } from "~/config/pages";
import type { Cta } from "~/lib/cta";

export type NavItem = {
  label: string;
  page: Page;
};

export type SocialPlatform = "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type SiteChrome = {
  navItems: ReadonlyArray<NavItem>;
  navCta: Cta | null;
  footerItems: ReadonlyArray<NavItem>;
  socialLinks: ReadonlyArray<SocialLink>;
};

export const siteChrome: SiteChrome = {
  footerItems: [{ label: "Portfolio", page: "portfolio" }],
  navCta: null,
  navItems: [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Contact", page: "contact" },
  ],
  socialLinks: [
    { platform: "github", url: "https://github.com/trroev" },
    { platform: "linkedin", url: "https://linkedin.com/in/trevormathiak" },
  ],
};
