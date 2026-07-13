import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <PagePlaceholder
      description="What I can build for you, and how I work — arriving soon."
      title="Services"
    />
  );
}
