export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

export function readTheme(): Theme | null {
  const { theme } = document.documentElement.dataset;
  return theme === "light" || theme === "dark" ? theme : null;
}

function suspendTransitions(): () => void {
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.append(style);
  return () => {
    window.getComputedStyle(document.body);
    window.requestAnimationFrame(() => style.remove());
  };
}

function tryStoreTheme(theme: Theme): boolean {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
}

export function setTheme(theme: Theme): void {
  const root = document.documentElement;
  const resumeTransitions = suspendTransitions();
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  resumeTransitions();
  tryStoreTheme(theme);
}

export function subscribeToTheme(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
    attributes: true,
  });
  return () => observer.disconnect();
}
