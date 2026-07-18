import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageHref } from "~/lib/page-href";
import { RenderBlocks } from "../_components/render-blocks";
import { pageToMetadata } from "../_lib/derive-metadata";
import { getPage, getPageSlugs } from "../_lib/pages";

export const dynamicParams = true;

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = await getPageSlugs();
  return slugs.filter((slug) => slug !== "home").map((slug) => ({ slug }));
}

type DynamicPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);
  return page ? pageToMetadata(page, pageHref(page)) : {};
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  if (slug === "home") {
    notFound();
  }
  const page = await getPage(slug);
  if (!page) {
    notFound();
  }
  return <RenderBlocks blocks={page.layout} />;
}
