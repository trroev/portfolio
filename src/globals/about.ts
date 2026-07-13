import type { GlobalConfig } from "payload";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";
import { titledItems } from "./fields";

export const About: GlobalConfig = {
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: "Page content",
  },
  fields: [
    {
      defaultValue: "About",
      name: "eyebrow",
      type: "text",
    },
    {
      defaultValue: "From the kitchen to the codebase",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      defaultValue:
        "I'm Trevor — a full-stack developer who took the long way here, and is better for it.",
      name: "lead",
      type: "textarea",
    },
    {
      admin: {
        description: "Optional portrait shown alongside the story.",
      },
      name: "portrait",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "The chef-to-developer story, in your own words.",
      },
      name: "story",
      type: "richText",
    },
    {
      fields: [
        {
          defaultValue: "What I value",
          name: "heading",
          type: "text",
        },
        titledItems({
          defaultValue: [
            {
              description:
                "The kitchen taught me that the details are the work. I sweat them.",
              title: "Craft",
            },
            {
              description:
                "Clear communication and dependable delivery, every time.",
              title: "Reliability",
            },
            {
              description:
                "There's always a better way to do it. I keep looking for it.",
              title: "Curiosity",
            },
          ],
          name: "items",
        }),
      ],
      label: "Values",
      name: "values",
      type: "group",
    },
    {
      fields: [
        {
          defaultValue: "How I work",
          name: "heading",
          type: "text",
        },
        titledItems({
          defaultValue: [
            {
              description:
                "I start by understanding the goal, then work in small, reviewable steps.",
              title: "Ship in small steps",
            },
            {
              description:
                "I keep you in the loop and make the trade-offs visible as we go.",
              title: "Communicate openly",
            },
            {
              description:
                "I care about the handoff — clean code, clear docs, easy to maintain.",
              title: "Leave it better",
            },
          ],
          name: "items",
        }),
      ],
      label: "How I work",
      name: "howIWork",
      type: "group",
    },
  ],
  slug: "about",
  versions: {
    drafts: true,
  },
};
