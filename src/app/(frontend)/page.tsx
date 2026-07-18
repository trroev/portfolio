import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RenderBlocks } from "./_components/render-blocks";
import { pageToMetadata } from "./_lib/derive-metadata";
import { getPage } from "./_lib/pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");
  return page ? pageToMetadata(page, "/") : {};
}

export default async function HomePage() {
  const page = await getPage("home");
  if (!page) {
    notFound();
  }
  return <RenderBlocks blocks={page.layout} />;
}
