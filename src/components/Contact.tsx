'use client'

import type { Form } from '@/app/models/Form'
import { useState } from 'react'
import Link from 'next/link'
import { FormSchema } from '@/app/models/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormField } from './FormField'
import { Icons } from './Icons'

export default function Contact() {
  const [resultMessage, setResultMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  })

  const processForm: SubmitHandler<Form> = async values => {
    try {
      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = await res.json()

      if (result.status === 'success') {
        setSuccess(true)
        setResultMessage(
          result.message ||
            "Your message was sent. I'll be in contact shortly.",
        )
        setTimeout(() => {
          setResultMessage('')
        }, 5000)
      } else {
        setResultMessage(
          result.message || 'An error occured while submitting the form.',
        )
        setTimeout(() => {
          setResultMessage('')
        }, 5000)
      }
      reset()
    } catch (error) {
      console.error(error)
      setResultMessage('An error occurred while submitting the form.')
      setTimeout(() => {
        setResultMessage('')
      }, 5000)
    }
  }

  return (
    <div id="contact" className="w-full px-2 py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="font-cal text-xl uppercase tracking-widest text-red-400">
          Contact
        </p>
        <h2 className="py-4 font-cal">Get In Touch</h2>
        <p className="p-4">
          I&#39;m available for freelance or full-time positions. Send me a
          message and let&#39;s talk.
        </p>
        <div className="flex w-full items-center justify-center p-10">
          <form
            onSubmit={handleSubmit(processForm)}
            className="w-11/12 space-y-6 sm:w-2/3"
          >
            <FormField
              label="Name"
              id="name"
              register={register}
              placeholder="Jane Doe"
              error={errors.name?.message}
              required={true}
            />
            <FormField
              label="Phone Number"
              id="phone"
              register={register}
              placeholder="3333333333"
              error={errors.phone?.message}
            />
            <FormField
              label="Email"
              id="email"
              register={register}
              placeholder="jane.doe@gmail.com"
              error={errors.email?.message}
              required={true}
            />
            <FormField
              label="Subject"
              id="subject"
              register={register}
              placeholder="Subject"
              error={errors.subject?.message}
            />
            <FormField
              label="Message"
              id="message"
              register={register}
              placeholder="Type your message here."
              error={errors.message?.message}
              type="textarea"
              rows={6}
              required={true}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-10 items-center justify-center rounded-md bg-slate-50 px-4 py-2 text-sm font-medium text-slate-950 duration-300 ease-in hover:bg-slate-50/70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <p className="mb-2 mt-1 text-xs text-green-500 sm:text-sm">
              {success !== false ? (
                resultMessage
              ) : (
                <span className="sm:textsm mb-2 mt-1 text-xs text-red-400">
                  {resultMessage}
                </span>
              )}
            </p>
          </form>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/" aria-label="return to the top of the page">
            <div className="cursor-pointer rounded-full border border-white/50 p-4 duration-300 ease-in hover:scale-110">
              <Icons.doubleUp
                className="text-red-400"
                size={30}
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
