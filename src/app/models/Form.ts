import { z } from 'zod'

export const FormSchema = z.object({
  name: z.string().nonempty('Please provide your name').trim(),
  phone: z
    .string()
    .regex(/^[0-9]+$/, { message: 'Only numbers are allowed' })
    .length(10, { message: 'Ten numbers are required' })
    .optional()
    .transform(val => {
      if (val === undefined) {
        return ''
      }
      return `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`
    }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty('Please provide your email address')
    .trim()
    .toLowerCase(),
  subject: z.string().trim().optional(),
  message: z.string().nonempty('Please provide a message').trim(),
})

export type Form = z.infer<typeof FormSchema>
