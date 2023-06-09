"use client";

import { Icons } from "./Icons";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { validate } from "../utils/validate";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

interface InputValues {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}

interface InputErrors extends Partial<InputValues> {}

export const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<InputErrors>({});
  const [success, setSuccess] = useState<boolean>(false);
  const [messageState, setMessageState] = useState<string>("");
  const [buttonText, setButtonText] =
    useState<string>("Send Message");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const errors = validate(values);
    if (
      errors !== null &&
      errors !== undefined &&
      Object.keys(errors).length > 0
    ) {
      return setErrors(errors);
    }
    setErrors({});
    setButtonText("Sending...");

    axios
      .post("/api/sendgrid", {
        name: values.name,
        number: values.number,
        email: values.email,
        subject: values.subject,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({
            name: "",
            number: "",
            email: "",
            subject: "",
            message: "",
          });
          setSuccess(true);
          setButtonText("Send Message");
          setMessageState(res.data.message);
          setTimeout(() => {
            setMessageState("");
          }, 5000);
        } else {
          setButtonText("Send Message");
          setMessageState(res.data.message);
          setTimeout(() => {
            setMessageState("");
          }, 5000);
        }
      })
      .catch((err) => {
        setButtonText("Send Message");
        setMessageState(String(err.message));
        setTimeout(() => {
          setMessageState("");
        }, 5000);
      });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

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
            <form onSubmit={handleSubmit}>
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
};
