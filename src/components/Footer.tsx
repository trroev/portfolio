import Link from "next/link";

import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="mx-auto p-4 md:px-6 md:py-8 border-t border-t-slate-200">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 mb-6 sm:mb-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 cursor-pointer" />
            <span className="font-medium">{siteConfig.title}</span>
          </Link>
          <div className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
            <a
              className="mr-6 md:mr-10 lg:mr-14 hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak LinkedIn page"
            >
              <div className="w-5 h-5">
                <Icons.linkedIn strokeWidth={1.5} />
              </div>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              className="mr-6 md:mr-10 lg:mr-14 hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak Github page"
            >
              <div className="w-5 h-5">
                <Icons.gitHub strokeWidth={1.5} />
              </div>
              <span className="sr-only">Github page</span>
            </a>
            <a
              className="hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak resume"
            >
              <div className="w-5 h-5">
                <Icons.resume strokeWidth={1.5} />
              </div>
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; 2023{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://www.trevormathiak.dev"
            target="_blank"
            aria-label="Link to www.trevormathiak.dev"
            rel="noopener noreferrer"
          >
            Trevor Mathiak
          </a>
        </p>
      </div>
    </footer>
  );
};
