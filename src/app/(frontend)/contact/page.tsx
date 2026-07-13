import { ContactForm } from "~/features/contact/components/contact-form";
import { pageMetadata } from "~/lib/metadata";

export const metadata = pageMetadata({
  description:
    "Have a project in mind, or just want to say hello? Send me a message.",
  path: "/contact",
  title: "Contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <header className="flex flex-col gap-4">
        <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
          Contact
        </p>
        <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
          Get in touch
        </h1>
        <p className="text-balance text-lg text-muted">
          Have a project in mind, or just want to say hello? Send me a message
          and I'll get back to you.
        </p>
      </header>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
