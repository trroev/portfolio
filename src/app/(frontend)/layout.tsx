import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/cn";
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
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
  },
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

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={cn(fontSans.variable, fontDisplay.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
