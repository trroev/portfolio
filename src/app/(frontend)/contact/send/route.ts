import { contactSchema } from "~/features/contact/schema";
import { sendContactEmail } from "~/features/contact/server/send-contact-email";

export async function POST(request: Request): Promise<Response> {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail(parsed.data);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }
}
