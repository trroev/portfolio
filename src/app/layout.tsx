import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'

import './globals.css'

import Navbar from '@/components/Navbar'
import { navConfig } from '@/config/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/utils/cn'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const calSans = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--cal-sans',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.website,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.title,
    images: siteConfig.openGraph.images,
    locale: siteConfig.openGraph.locale,
    type: siteConfig.openGraph.type,
  },
  icons: {
    icon: siteConfig.icons.icon,
    shortcut: siteConfig.icons.shortcut,
    apple: siteConfig.icons.apple,
  },
  manifest: siteConfig.manifest,
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-sans text-foreground antialiased',
          fontSans.variable,
          calSans.variable,
        )}
      >
        <Navbar items={navConfig.navLinks} />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
