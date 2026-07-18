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
