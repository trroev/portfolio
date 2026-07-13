import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <PagePlaceholder
      description="A curated selection of my work for recruiters and hiring managers — arriving soon."
      title="Portfolio"
    />
  );
}
