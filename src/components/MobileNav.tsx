import { FC } from "react";
import Link from "next/link";

import { NavLink } from "@/types";
import { Icons } from "./Icons";
import { useLockBody } from "@/hooks/lock-body";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  items?: NavLink[];
  onClose?: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ items, onClose }) => {
  useLockBody();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 backdrop-blur-sm md:hidden">
      <div className="relative z-20 grid gap-6 rounded-md bg-slate-950 p-4 shadow-md">
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 cursor-pointer" />
          <span className="font-medium">{siteConfig.title}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex w-full items-center rounded-md p-2 text-sm text-slate-50/70 font-medium transition-colors hover:text-slate-100"
              onClick={handleLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
