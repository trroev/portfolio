import { PageIntro } from "~/components/page-intro";
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
      <PageIntro
        eyebrow="Contact"
        heading="Get in touch"
        lead="Have a project in mind, or just want to say hello? Send me a message and I'll get back to you."
      />

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
