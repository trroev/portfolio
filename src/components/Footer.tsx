import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { Icons } from './Icons'

export const Footer = () => {
  return (
    <footer className="container">
      <div className="mx-auto border-t border-t-slate-200 p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="mb-6 flex items-center space-x-2 sm:mb-0">
            <div className="h-8 w-8 cursor-pointer rounded-full bg-linear-to-br from-yellow-200 to-red-600 sm:h-10 sm:w-10" />
            <span className="hidden font-medium sm:inline-block">
              {siteConfig.title}
            </span>
          </Link>
          <div className="mb-6 flex flex-wrap items-center text-sm sm:mb-0">
            <a
              className="mr-6 cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary md:mr-10 lg:mr-14"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak LinkedIn page"
            >
              <div className="h-5 w-5">
                <Icons.linkedIn strokeWidth={1.5} />
              </div>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              className="mr-6 cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary md:mr-10 lg:mr-14"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Trevor Mathiak Github page"
            >
              <div className="h-5 w-5">
                <Icons.gitHub strokeWidth={1.5} />
              </div>
              <span className="sr-only">Github page</span>
            </a>
            <a
              className="cursor-pointer duration-300 ease-in hover:scale-110 hover:text-primary"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak resume"
            >
              <div className="h-5 w-5">
                <Icons.resume strokeWidth={1.5} />
              </div>
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-slate-200 sm:mx-auto lg:my-8" />
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; 2023{' '}
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
