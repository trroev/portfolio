import { OpenGraphType } from 'next/dist/lib/metadata/types/opengraph-types'

export type NavLink = {
  title: string
  href: string
}

export type NavConfig = {
  navLinks: NavLink[]
}

export type SiteConfig = {
  title: string
  description: string
  author: string
  website: string
  keywords: string[]
  url: string
  openGraph: {
    title: string
    description: string
    url: string
    site_name: string
    images: string
    type: OpenGraphType
    locale: string
  }
  icons: {
    icon: string
    shortcut: string
    apple: string
  }
  links: any
  manifest: string
}
