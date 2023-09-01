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

// interface InputValues {
//   name: string;
//   number: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface InputErrors extends Partial<InputValues> {}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<Form> = (values) => {
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
          <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full max-w-small items-center gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Jane Doe"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 mb-2">
                    {errors.name?.message}
                  </p>
                )}
                <label
                  htmlFor="phone"
                  className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register("phone")}
                  placeholder="3333333333"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1 mb-2">
                    {errors.phone?.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  placeholder="janedoe@gmail.com"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 mb-2">
                    {errors.email?.message}
                  </p>
                )}
                <label
                  htmlFor="subject"
                  className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  placeholder="Subject"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                />
                <label
                  htmlFor="message"
                  className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Type your message here."
                  className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1 mb-2">
                    {errors.message?.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-4 mt-8 border rounded-lg border-gray-400 bg-[#3B3B3B] hover:bg-[#3B3B3B]/70 ease-in duration 300"
              >
                Submit
              </button>
            </form>
            {/* <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <Input
                    value={values.name}
                    onChange={handleChange}
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Jane Doe"
                    error={!!errors.name}
                    errorMessage={!!errors.name ? errors.name : ""}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    value={values.number}
                    onChange={handleChange}
                    id="number"
                    name="number"
                    label="Phone Number"
                    placeholder="333-333-3333"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <Input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  label="Email"
                  placeholder="janedoe@gmail.com"
                  error={!!errors.email}
                  errorMessage={!!errors.email ? errors.email : ""}
                />
              </div>
              <div className="flex flex-col py-2">
                <Input
                  value={values.subject}
                  onChange={handleChange}
                  id="subject"
                  name="subject"
                  label="Subject"
                  placeholder="Message Subject"
                />
              </div>
              <TextArea
                value={values.message}
                onChange={handleChange}
                id="message"
                name="message"
                label="Message"
                placeholder="Your message here..."
                error={!!errors.message}
                errorMessage={!!errors.message ? errors.message : ""}
              />
              <button className="w-full p-4 mt-4 border rounded-lg border-gray-400 bg-[#3B3B3B] hover:bg-[#3B3B3B]/70 ease-in duration 300">
                {buttonText}
              </button>
              <div>
                <p className="text-green-600 uppercase text-sm mt-4">
                  {success !== false ? (
                    messageState
                  ) : (
                    <span className="text-red-400 uppercase text-sm mt-4">
                      {messageState}
                    </span>
                  )}
                </p>
              </div>
            </form> */}
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
