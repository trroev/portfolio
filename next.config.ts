import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import { siteConfig } from "./src/config/site";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      headers: [
        {
          key: "Link",
          value: `<${siteConfig.url}/pdf/:path*>; rel="canonical"`,
        },
      ],
      source: "/pdf/:path*",
    },
  ],
  images: {
    remotePatterns: [
      {
        hostname: "**.public.blob.vercel-storage.com",
        protocol: "https",
      },
    ],
  },
};

export default withPayload(nextConfig);
