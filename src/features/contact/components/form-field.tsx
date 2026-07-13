import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-medium text-foreground text-sm" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? (
        <p
          className="text-red-600 text-sm dark:text-red-400"
          id={`${htmlFor}-error`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
