import type {
  DefaultNodeTypes,
  SerializedHeadingNode,
  SerializedLinkNode,
  SerializedListNode,
} from "@payloadcms/richtext-lexical";
import {
  type JSXConvertersFunction,
  RichText as LexicalRichText,
} from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "~/lib/cn";
import { pageHref } from "~/lib/page-href";

const headingClassNames: Record<SerializedHeadingNode["tag"], string> = {
  h1: "mt-8 font-display font-semibold text-3xl text-text-primary",
  h2: "mt-8 font-display font-semibold text-2xl text-text-primary",
  h3: "mt-8 font-display font-semibold text-text-primary text-xl",
  h4: "mt-8 font-display font-semibold text-lg text-text-primary",
  h5: "mt-8 font-display font-semibold text-base text-text-primary",
  h6: "mt-8 font-display font-semibold text-base text-text-primary",
};

const listClassNames: Record<SerializedListNode["listType"], string> = {
  bullet: "mt-4 list-disc pl-6",
  check: "mt-4 pl-6",
  number: "mt-4 list-decimal pl-6",
};

function internalDocHref(linkNode: SerializedLinkNode): string {
  const { doc } = linkNode.fields;
  if (!doc || typeof doc.value !== "object" || doc.value === null) {
    return "/";
  }
  const { value } = doc;
  if (
    doc.relationTo === "pages" &&
    "slug" in value &&
    typeof value.slug === "string"
  ) {
    return pageHref({ slug: value.slug });
  }
  return "/";
}

type AnchorProps = {
  href: string;
  newTab?: boolean | null;
  children: ReactNode;
};

function Anchor({ href, newTab, children }: AnchorProps) {
  const className = "text-accent underline";
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <a
      className={className}
      href={href}
      rel={newTab ? "noopener noreferrer" : undefined}
      target={newTab ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

const converters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  autolink: ({ node, nodesToJSX }) => (
    <Anchor href={node.fields.url ?? "/"} newTab={node.fields.newTab}>
      {nodesToJSX({ nodes: node.children })}
    </Anchor>
  ),
  heading: ({ node, nodesToJSX }) => {
    const NodeTag = node.tag;
    return (
      <NodeTag className={headingClassNames[node.tag]}>
        {nodesToJSX({ nodes: node.children })}
      </NodeTag>
    );
  },
  link: ({ node, nodesToJSX }) => {
    const href =
      node.fields.linkType === "internal"
        ? internalDocHref(node)
        : (node.fields.url ?? "/");
    return (
      <Anchor href={href} newTab={node.fields.newTab}>
        {nodesToJSX({ nodes: node.children })}
      </Anchor>
    );
  },
  list: ({ node, nodesToJSX }) => {
    const NodeTag = node.tag;
    return (
      <NodeTag className={listClassNames[node.listType]}>
        {nodesToJSX({ nodes: node.children })}
      </NodeTag>
    );
  },
  paragraph: ({ node, nodesToJSX }) => (
    <p className="mt-4 first:mt-0">{nodesToJSX({ nodes: node.children })}</p>
  ),
});

type RichTextProps = {
  data: ComponentProps<typeof LexicalRichText>["data"];
  className?: string;
};

export function RichText({ data, className }: RichTextProps) {
  return (
    <LexicalRichText
      className={cn("text-text-muted leading-relaxed", className)}
      converters={converters}
      data={data}
    />
  );
}
