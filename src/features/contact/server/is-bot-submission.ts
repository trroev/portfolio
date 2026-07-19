import "server-only";

export function isBotSubmission(body: unknown): boolean {
  if (typeof body !== "object" || body === null) {
    return false;
  }
  if (!("botField" in body)) {
    return false;
  }
  return typeof body.botField === "string" && body.botField.trim() !== "";
}
