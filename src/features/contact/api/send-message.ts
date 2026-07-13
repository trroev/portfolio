import type { ContactInput } from "../schema";

type SendMessageResult =
  | { status: "success" }
  | { status: "error"; message: string };

const GENERIC_ERROR =
  "Something went wrong sending your message. Please try again.";

function extractErrorMessage(body: unknown): string | null {
  if (
    typeof body === "object" &&
    body !== null &&
    "error" in body &&
    typeof body.error === "string"
  ) {
    return body.error;
  }
  return null;
}

export async function sendMessage(
  input: ContactInput
): Promise<SendMessageResult> {
  try {
    const response = await fetch("/contact/send", {
      body: JSON.stringify(input),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      const body: unknown = await response.json().catch(() => null);
      return {
        message: extractErrorMessage(body) ?? GENERIC_ERROR,
        status: "error",
      };
    }

    return { status: "success" };
  } catch {
    return { message: GENERIC_ERROR, status: "error" };
  }
}
