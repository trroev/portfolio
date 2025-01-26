import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { GitHubIcon } from '@/icons/GitHub'
import { LinkedInIcon } from '@/icons/LinkedIn'
import { ResumeIcon } from '@/icons/Resume'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="mx-auto border-t border-t-slate-200 p-4 md:px-6 md:py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 cursor-pointer rounded-full bg-linear-to-br from-yellow-200 to-red-600 sm:h-10 sm:w-10" />
            <span className="hidden font-medium sm:inline-block">
              {siteConfig.title}
            </span>
          </Link>
          <div className="flex flex-wrap items-center space-x-6 text-sm sm:mb-0 md:space-x-10 lg:space-x-14">
            <a
              className="size-5 cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak LinkedIn page"
            >
              <LinkedInIcon />
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              className="size-5 cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak Github page"
            >
              <GitHubIcon />
              <span className="sr-only">Github page</span>
            </a>
            <a
              className="size-5 cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak resume"
            >
              <ResumeIcon />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {new Date().getFullYear()}{' '}
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
  )
}
