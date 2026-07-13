"use client";

import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { iconButton } from "@/lib/styles";

type ThemeIconProps = {
  isMounted: boolean;
  isDark: boolean;
};

function ThemeIcon({ isMounted, isDark }: ThemeIconProps) {
  if (!isMounted) {
    return <span className="size-5" />;
  }
  return isDark ? (
    <RiSunLine aria-hidden="true" size={20} />
  ) : (
    <RiMoonLine aria-hidden="true" size={20} />
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  function handleToggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={iconButton}
      onClick={handleToggleTheme}
      type="button"
    >
      <ThemeIcon isDark={isDark} isMounted={isMounted} />
    </button>
  );
}
