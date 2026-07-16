"use client";

import { useEffect } from "react";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground antialiased">
        <h1 className="font-semibold text-3xl">Something went wrong</h1>
        <p className="max-w-md text-muted">
          Sorry about that — an unexpected error kept the site from loading.
        </p>
        <button
          className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground text-sm hover:bg-primary-hover"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
