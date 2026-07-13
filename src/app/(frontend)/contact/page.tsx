import type { Metadata } from "next";
import { PagePlaceholder } from "~/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      description="A way to reach me directly is on its way. In the meantime, find me on LinkedIn or GitHub."
      title="Get in touch"
    />
  );
}
