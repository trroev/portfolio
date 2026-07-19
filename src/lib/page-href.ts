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

/**
 * Resolves a Payload page relationship — which may be an unpopulated id
 * string, a populated page document, or null — to an href, or null when it
 * can't be resolved (e.g. depth too shallow to populate the slug).
 */
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

/**
 * A resolved call-to-action: a label plus its resolved link target.
 */
export type ResolvedCta = ResolvedLink & {
  label: string;
};

/**
 * Vercel Blob serves `${url}?download=1` with `Content-Disposition: attachment`,
 * forcing a real download even cross-origin, where the anchor `download`
 * attribute alone is ignored by browsers.
 */
function toDownloadHref(url: string): string {
  return url.includes("?") ? `${url}&download=1` : `${url}?download=1`;
}

/**
 * Resolves a link field (a Page or a file download) to an href plus whether it
 * should be offered as a download, or null when the target can't be resolved
 * (missing page/file, or a relationship too shallow to populate).
 */
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

/**
 * Resolves a CTA field — a link plus its label — to a rendered CTA, or null
 * when the link can't be resolved or the label is missing.
 */
export function resolveCta(
  cta: CtaValue | null | undefined
): ResolvedCta | null {
  const link = resolveLink(cta);
  if (!(cta?.label && link)) {
    return null;
  }
  return { ...link, label: cta.label };
}
