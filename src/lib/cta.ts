import { type Page, pageHref } from "~/config/pages";

export type PageCta = {
  kind: "page";
  label: string;
  page: Page;
};

export type DownloadCta = {
  kind: "download";
  label: string;
  file: `/${string}`;
};

export type Cta = PageCta | DownloadCta;

export function ctaHref(cta: Cta): string {
  return cta.kind === "page" ? pageHref(cta.page) : cta.file;
}
