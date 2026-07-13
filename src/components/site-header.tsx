"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wordmark } from "@/components/wordmark";
import { mainNav, type NavItem } from "@/config/site";
import { focusRing, iconButton, primaryButton } from "@/lib/styles";

function isActive({ pathname, href }: { pathname: string; href: string }) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

type NavLinkProps = {
  item: NavItem;
  isCurrent: boolean;
  variant: "desktop" | "mobile";
};

function NavLink({ item, isCurrent, variant }: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <Link
        aria-current={isCurrent ? "page" : undefined}
        className={`block rounded-md px-3 py-2.5 font-medium text-base transition-colors ${focusRing} ${
          isCurrent
            ? "bg-surface text-foreground"
            : "text-muted hover:bg-surface hover:text-foreground"
        }`}
        href={item.href}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <Link
      aria-current={isCurrent ? "page" : undefined}
      className={`relative rounded-sm px-3 py-2 font-medium text-sm transition-colors ${focusRing} ${
        isCurrent ? "text-foreground" : "text-muted hover:text-foreground"
      }`}
      href={item.href}
    >
      {item.title}
      {isCurrent ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-px h-0.5 rounded bg-signature"
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu on every route change — pathname is the trigger, not a value the effect reads.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function handleToggleMenu() {
    setIsMenuOpen((value) => !value);
  }

  return (
    <header className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink
              isCurrent={isActive({ href: item.href, pathname })}
              item={item}
              key={item.href}
              variant="desktop"
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            className={`hidden md:inline-flex ${primaryButton}`}
            href="/contact"
          >
            Get in touch
          </Link>
          <button
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden ${iconButton}`}
            onClick={handleToggleMenu}
            type="button"
          >
            {isMenuOpen ? (
              <RiCloseLine aria-hidden="true" size={22} />
            ) : (
              <RiMenuLine aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Mobile"
          className="border-border border-t bg-background px-6 py-4 md:hidden"
          id="mobile-nav"
        >
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  isCurrent={isActive({ href: item.href, pathname })}
                  item={item}
                  variant="mobile"
                />
              </li>
            ))}
          </ul>
          <Link className={`mt-4 w-full ${primaryButton}`} href="/contact">
            Get in touch
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
