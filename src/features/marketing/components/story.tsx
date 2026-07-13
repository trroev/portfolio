import { RichText } from "@payloadcms/richtext-lexical/react";
import type { About } from "~/payload-types";

type StoryProps = {
  data: NonNullable<About["story"]>;
};

const storyClassName =
  "max-w-2xl text-muted leading-relaxed [&_a]:text-link [&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:text-foreground [&_p]:mt-4 [&_p:first-child]:mt-0";

export function Story({ data }: StoryProps) {
  return <RichText className={storyClassName} data={data} />;
}
