import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter, type SocialLink } from "~/components/site-footer";
import {
  type NavCta,
  type NavLink,
  SiteHeader,
} from "~/components/site-header";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/cn";
import { pageRelationshipHref } from "~/lib/page-href";
import { getGlobal } from "~/lib/payload";
import type { Footer, Navigation } from "~/payload-types";
import "../globals.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.title,
    type: "website",
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    title: siteConfig.title,
  },
};

function toNavLinks(
  items: Navigation["items"] | Footer["items"]
): Array<NavLink> {
  return (items ?? []).flatMap((item) => {
    const href = pageRelationshipHref(item.page);
    return href ? [{ href, title: item.label }] : [];
  });
}

function toNavCta(cta: Navigation["cta"]): NavCta | null {
  const href = pageRelationshipHref(cta?.page);
  if (!(cta?.label && href)) {
    return null;
  }
  return { href, label: cta.label };
}

function toSocialLinks(links: Footer["socialLinks"]): Array<SocialLink> {
  return (links ?? []).map((link) => ({
    platform: link.platform,
    url: link.url,
  }));
}

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const [navigation, footer] = await Promise.all([
    getGlobal({ slug: "navigation" }),
    getGlobal({ slug: "footer" }),
  ]);

  return (
    <html
      className={cn(fontSans.variable, fontDisplay.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <SiteHeader
            cta={toNavCta(navigation.cta)}
            items={toNavLinks(navigation.items)}
          />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter
            items={toNavLinks(footer.items)}
            socialLinks={toSocialLinks(footer.socialLinks)}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
