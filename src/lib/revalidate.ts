import { revalidatePath } from "next/cache";

export function isPublished(doc: unknown): boolean {
  return (
    typeof doc === "object" &&
    doc !== null &&
    "_status" in doc &&
    doc._status === "published"
  );
}

export function revalidatePaths(paths: ReadonlyArray<string>): void {
  for (const path of paths) {
    revalidatePath(path);
  }
}

export function revalidateLayout(): void {
  revalidatePath("/", "layout");
}
