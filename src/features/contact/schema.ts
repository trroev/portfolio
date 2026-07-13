import { z } from "zod";

export const contactSchema = z.object({
  email: z.email("Enter a valid email address.").max(254),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(5000, "Your message is a little too long."),
  name: z
    .string()
    .trim()
    .min(1, "Please tell me your name.")
    .max(100, "That name is a little too long."),
});

export type ContactInput = z.infer<typeof contactSchema>;
