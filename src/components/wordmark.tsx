import Link from "next/link";
import { focusRing } from "~/lib/styles";

export function Wordmark() {
  return (
    <Link
      aria-label="trroev development — home"
      className={`inline-flex items-baseline rounded-sm font-display font-semibold text-lg tracking-tight ${focusRing}`}
      href="/"
    >
      trroev
      <span aria-hidden="true" className="text-signature">
        .
      </span>
    </Link>
  );
}
