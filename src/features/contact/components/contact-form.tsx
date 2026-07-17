"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/button";
import { cn } from "~/lib/cn";
import { sendMessage } from "../api/send-message";
import { type ContactFormInput, contactFormSchema } from "../schema";
import { FormField } from "./form-field";

type FormState =
  | { kind: "idle" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const fieldControl =
  "focus-ring rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors placeholder:text-text-muted aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: { botField: "", email: "", message: "", name: "" },
    resolver: zodResolver(contactFormSchema),
  });

  async function handleValidSubmit(values: ContactFormInput) {
    setFormState({ kind: "idle" });
    const result = await sendMessage(values);
    if (result.status === "success") {
      setFormState({ kind: "success" });
      reset();
      return;
    }
    setFormState({ kind: "error", message: result.message });
  }

  if (formState.kind === "success") {
    return (
      <div
        className="flex flex-col gap-2 rounded-lg border border-border bg-surface px-6 py-8 text-center"
        role="status"
      >
        <h2 className="font-display font-semibold text-xl">Message sent</h2>
        <p className="text-text-muted">
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button
          className="focus-ring mt-2 self-center rounded-sm font-medium text-accent text-sm hover:underline"
          onClick={() => setFormState({ kind: "idle" })}
          type="button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      noValidate
      onSubmit={handleSubmit(handleValidSubmit)}
    >
      {formState.kind === "error" ? (
        <p
          className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-destructive text-sm"
          role="alert"
        >
          {formState.message}
        </p>
      ) : null}

      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="botField">Leave this field empty</label>
        <input
          autoComplete="off"
          id="botField"
          tabIndex={-1}
          type="text"
          {...register("botField")}
        />
      </div>

      <FormField error={errors.name?.message} htmlFor="name" label="Name">
        <input
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className={fieldControl}
          id="name"
          type="text"
          {...register("name")}
        />
      </FormField>

      <FormField error={errors.email?.message} htmlFor="email" label="Email">
        <input
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className={fieldControl}
          id="email"
          type="email"
          {...register("email")}
        />
      </FormField>

      <FormField
        error={errors.message?.message}
        htmlFor="message"
        label="Message"
      >
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          className={cn(fieldControl, "min-h-36 resize-y")}
          id="message"
          rows={6}
          {...register("message")}
        />
      </FormField>

      <Button className="self-start" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
