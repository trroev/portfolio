import { type FC } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { useLockBody } from '@/hooks/lock-body'
import { type NavLink } from '@/types'

type MobileNavProps = {
  items?: NavLink[]
  onClose?: () => void
}

const MobileNav: FC<MobileNavProps> = ({ items, onClose }) => {
  useLockBody()

  const handleLinkClick = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-slate-950/75 p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-slate-950 p-4 shadow-md">
        <Link
          href="/"
          className="flex items-center space-x-4"
          onClick={handleLinkClick}
        >
          <div className="h-10 w-10 cursor-pointer rounded-full bg-gradient-to-br from-yellow-200 to-red-600" />
          <span className="hidden font-medium sm:inline-block">
            {siteConfig.title}
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center rounded-md p-2 text-sm font-medium text-slate-50/70 transition-colors hover:text-slate-100"
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
