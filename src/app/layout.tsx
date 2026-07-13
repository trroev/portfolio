import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontDisplay = localFont({
  display: "swap",
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} flex min-h-screen flex-col antialiased`}
      >
        <main className="flex flex-1 flex-col">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
