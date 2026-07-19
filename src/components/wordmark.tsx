import Link from "next/link";

export function Wordmark() {
  return (
    <Link
      aria-label="trroev development — home"
      className="focus-ring inline-flex items-baseline rounded-sm font-display font-semibold text-lg tracking-tight"
      href="/"
    >
      trroev
      <span aria-hidden="true" className="text-accent">
        .
      </span>
    </Link>
  );
}
