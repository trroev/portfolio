import type { GlobalConfig } from "payload";
import { authenticated } from "../access/authenticated";
import { authenticatedOrPublished } from "../access/authenticated-or-published";
import { titledItems } from "./fields";
import { revalidateGlobalPath } from "./hooks/revalidate";

export const Services: GlobalConfig = {
  access: {
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    group: "Page content",
  },
  fields: [
    {
      defaultValue: "Services",
      name: "eyebrow",
      type: "text",
    },
    {
      defaultValue: "What I can build for you",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      defaultValue:
        "I take projects from idea to production — the interface, the server, the content model, and the deploy. Here's where I can help.",
      name: "intro",
      type: "textarea",
    },
    {
      fields: [
        {
          defaultValue: "Capabilities",
          name: "heading",
          type: "text",
        },
        titledItems({
          defaultValue: [
            {
              description:
                "Marketing sites that load fast and read well on every screen.",
              title: "Websites",
            },
            {
              description:
                "Full-stack web applications with real data, authentication, and an admin behind them.",
              title: "Web apps",
            },
            {
              description:
                "CMS-backed content so you can update copy and media without waiting on a developer.",
              title: "Content management",
            },
            {
              description:
                "APIs and integrations that connect your app to the services it depends on.",
              title: "APIs & integrations",
            },
          ],
          name: "items",
        }),
      ],
      label: "Capabilities",
      name: "capabilities",
      type: "group",
    },
    {
      fields: [
        {
          defaultValue: "How it works",
          name: "heading",
          type: "text",
        },
        titledItems({
          defaultValue: [
            {
              description:
                "We talk through what you need and agree on the shape of the work.",
              title: "Scope",
            },
            {
              description:
                "I build in small, reviewable steps so you always see progress.",
              title: "Build",
            },
            {
              description:
                "I ship it, hand it over clean, and stay available for what's next.",
              title: "Launch",
            },
          ],
          name: "items",
        }),
      ],
      label: "Approach",
      name: "approach",
      type: "group",
    },
    {
      fields: [
        {
          defaultValue: "Have a project in mind?",
          name: "heading",
          type: "text",
        },
        {
          defaultValue:
            "Tell me what you're building and I'll get back to you.",
          name: "body",
          type: "textarea",
        },
        {
          defaultValue: "Get in touch",
          name: "ctaLabel",
          type: "text",
        },
      ],
      label: "Call to action",
      name: "cta",
      type: "group",
    },
  ],
  hooks: {
    afterChange: [revalidateGlobalPath("/services")],
  },
  slug: "services",
  versions: {
    drafts: true,
  },
};
