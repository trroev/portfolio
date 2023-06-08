"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { Icons } from "./Icons";
import { NavLink } from "@/types";
import { siteConfig } from "@/config/site";
import MobileNav from "./MobileNav";

interface NavbarProps {
  items?: NavLink[];
}

const Navbar: FC<NavbarProps> = ({ items }) => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="container sticky top-0 z-40 bg-slate-950/80 backdrop-blur-sm">
      <div className="flex h-20 items-center justify-between border-b border-b-slate-200 py-6">
        <Link
          href="/"
          aria-label="Link to home page"
          className="items-center space-x-2 md:flex"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 cursor-pointer" />
          <span className="hidden font-bold md:inline-block">
            {siteConfig.title}
          </span>
        </Link>
        <div className="flex gap-6 md:gap-10">
          <nav className="hidden gap-6 md:flex ml-auto">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center text-lg text-slate-50/70 font-medium transition-colors hover:text-slate-100 sm:text-sm"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <button
          className="flex items-center space-x-2 md:hidden hover:scale-110 duration-300"
          onClick={handleNav}
        >
          {nav ? <Icons.close /> : <Icons.menu />}
        </button>
        {nav && <MobileNav items={items} onClose={handleNav} />}
      </div>
    </header>
  );
};

export default Navbar;
