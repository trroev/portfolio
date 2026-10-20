export const pagePaths = {
  about: "/about",
  contact: "/contact",
  home: "/",
  portfolio: "/portfolio",
  services: "/services",
} as const satisfies Record<string, `/${string}`>;

export type Page = keyof typeof pagePaths;

export type PagePath = (typeof pagePaths)[Page];

export function pageHref(page: Page): PagePath {
  return pagePaths[page];
}
