"use client";

import { Icons } from "./Icons";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, type Form } from "@/app/models/Form";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FormField } from "./FormField";

export default function Contact() {
  const { pending } = useFormStatus();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });

  const processForm: SubmitHandler<Form> = (values) => {
    console.log(values);
    reset();
  };

  console.log(isValid);

  return (
    <div id="contact" className="w-full px-2 py-20">
      <div className="max-w-[1240px] mx-auto w-full">
        <p className="font-cal uppercase text-xl tracking-widest text-red-400">
          Contact
        </p>
        <h2 className="font-cal py-4">Get In Touch</h2>
        <p className="p-4">
          I&#39;m available for freelance or full-time positions. Send
          me a message and let&#39;s talk.
        </p>
        <div className="flex w-full justify-center p-10 items-center">
          <form
            onSubmit={handleSubmit(processForm)}
            className="w-11/12 sm:w-2/3 space-y-6"
          >
            <FormField
              label="Name"
              id="name"
              register={register}
              placeholder="Jane Doe"
              error={errors.name?.message}
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
            />

            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-950 bg-slate-50 h-10 px-4 py-2 hover:bg-slate-50/70 ease-in duration 300"
            >
              {pending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/" aria-label="return to the top of the page">
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-300 border border-white/50">
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
  );
}
