import type { Metadata } from "next";
import { PagePlaceholder } from "~/components/page-placeholder";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      description="The story behind trroev development, and how I work — arriving soon."
      title="About"
    />
  );
}
