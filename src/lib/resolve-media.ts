import type { Media } from "~/payload-types";

export function resolveMedia(
  media: string | Media | null | undefined
): Media | null {
  return typeof media === "object" && media !== null ? media : null;
}
