import { CONTACT_TO_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { Resend } from "resend";
import type { ContactInput } from "../schema";

const FROM_ADDRESS = "trroev development <contact@send.trevormathiak.dev>";

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactInput): Promise<void> {
  if (!(RESEND_API_KEY && CONTACT_TO_EMAIL)) {
    throw new Error("Contact email is not configured.");
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `${message}\n\n— ${name} <${email}>`,
    to: CONTACT_TO_EMAIL,
  });

  if (error) {
    throw new Error(error.message);
  }
}
