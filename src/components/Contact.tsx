"use client";

import { Icons } from "./Icons";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { validate } from "../utils/validate";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { FormSchema, type Form } from "@/app/models/Form";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FormField } from "./FormField";

// interface InputValues {
//   name: string;
//   number: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface InputErrors extends Partial<InputValues> {}

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
        <div className="w-full h-auto rounded-xl lg:p-4">
          <div className="flex justify-center">
            <form onSubmit={handleSubmit(processForm)}>
              {/* <div> */}
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
              {/* </div> */}
              <button
                type="submit"
                disabled={pending}
                className="w-full max-w-xl p-4 mt-6 rounded-lg border border-gray-400 bg-[#3B3B3B] hover:bg-[#3B3B3B]/70 ease-in duration 300"
              >
                {pending ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
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
