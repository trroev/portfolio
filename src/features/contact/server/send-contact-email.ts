import "server-only";
import { Resend } from "resend";
import type { ContactInput } from "../schema";

const FROM_ADDRESS = "trroev development <contact@trevormathiak.dev>";

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;

  if (!(apiKey && toAddress)) {
    throw new Error("Contact email is not configured.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `${message}\n\n— ${name} <${email}>`,
    to: toAddress,
  });

  if (error) {
    throw new Error(error.message);
  }
}
