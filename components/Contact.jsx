import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send Message");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");
      const res = await fetch("/api/sendgrid", {
        method: "post",
        body: JSON.stringify(formData),
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");
        setName("");
        setNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        return;
      }
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      setShowFailureMessage(false);
      setButtonText("Send Message");
      setName("");
      setNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  return (
    <div id="contact" className="w-full p-2 mt-10">
      <div className="max-w-[1240px] mx-auto py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-orange-600">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <p className="p-4">
          I&#39;m available for freelance or full-time positions. Send me a
          message and let&#39;s talk.
        </p>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                    <span className=" text-orange-600 px-1">*</span>
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  {errors?.name && (
                    <p className="text-orange-600 uppercase text-sm mt-2">
                      Please provide your name
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="number" className="uppercase text-sm py-2">
                    Phone Number
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="number"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="email" className="uppercase text-sm py-2">
                  Email
                  <span className=" text-orange-600 px-1">*</span>
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="Email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors?.email && (
                  <p className="text-orange-600 uppercase text-sm mt-2">
                    Please provide your Email address
                  </p>
                )}
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="subject" className="uppercase text-sm py-2">
                  Subject
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col py-2">
                <label htmlFor="message" className="uppercase text-sm py-2">
                  Message
                  <span className=" text-orange-600 px-1">*</span>
                </label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                {errors?.message && (
                  <p className="text-orange-600 uppercase text-sm mt-2">
                    Please provide a message
                  </p>
                )}
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                {buttonText}
              </button>
              <div>
                {showSuccessMessage && (
                  <p className="text-green-600 uppercase text-sm mt-4">
                    Thank You! Your Message has been delivered
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-orange-600 uppercase text-sm mt-4">
                    Oops! Something went wrong, please try again
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-orange-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
