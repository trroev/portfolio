import { pageHref } from "~/config/pages";

export function Wordmark() {
  return (
    <a
      aria-label="trroev development — home"
      className="focus-ring inline-flex items-baseline rounded-sm font-display text-lg font-semibold tracking-tight"
      href={pageHref("home")}
    >
      trroev
      <span aria-hidden="true" className="text-accent">
        .
      </span>
    </a>
  );
}
