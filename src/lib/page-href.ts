type PageRef = {
  slug?: string | null;
};

export function pageHref(page: PageRef | null | undefined): string {
  const slug = page?.slug;
  if (!slug || slug === "home") {
    return "/";
  }
  return `/${slug}`;
}

export function pageRelationshipHref(
  page: string | PageRef | null | undefined
): string | null {
  return typeof page === "object" && page !== null ? pageHref(page) : null;
}

type FileRef = {
  url?: string | null;
};

type LinkValue = {
  type?: ("page" | "download") | null;
  page?: string | PageRef | null;
  file?: string | FileRef | null;
};

export type ResolvedLink = {
  href: string;
  download: boolean;
};

export type ResolvedCta = ResolvedLink & {
  label: string;
};

function toDownloadHref(url: string): string {
  return url.includes("?") ? `${url}&download=1` : `${url}?download=1`;
}

export function resolveLink(
  link: LinkValue | null | undefined
): ResolvedLink | null {
  if (link?.type === "download") {
    const url =
      typeof link.file === "object" && link.file ? link.file.url : null;
    return url ? { download: true, href: toDownloadHref(url) } : null;
  }
  const href = pageRelationshipHref(link?.page);
  return href ? { download: false, href } : null;
}

type CtaValue = LinkValue & {
  label?: string | null;
};

export function resolveCta(
  cta: CtaValue | null | undefined
): ResolvedCta | null {
  const link = resolveLink(cta);
  if (!(cta?.label && link)) {
    return null;
  }
  return { ...link, label: cta.label };
}
