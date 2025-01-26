import Image from 'next/image'
import Link from 'next/link'

import { BoxIcon } from '@/icons/Box'

export default function guidedGrowthPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-[#141414]/80 lg:h-[40vh]" />
        <Image
          blurDataURL="/assets/projects/screenshot.jpg"
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src="/assets/projects/screenshot.webp"
          alt="Screenshot for landing page of rachaelmathiak.com"
          placeholder="blur"
        />
        <div className="absolute top-[70%] right-[50%] left-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-4 text-white">
          <h2 className="py-2">Guided Growth with Rachael</h2>
          <h3>Next.js</h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            One of my first freelance projects. I built this website using
            Next.js with TypeScript and TailwindCSS. I also utilized Formik to
            make the contact form, and the SendGrid email API to handle the
            contact form submission. This was my first time working with a
            client, and it was a good experience to get feedback in real time.
            While building, I learned that converting images to the .webp format
            is best practice.
          </p>
          <a
            href="https://www.rachaelmathiak.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 mr-8 px-8 py-2 duration-300 ease-in hover:scale-105">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/guided-growth-with-rachael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-8 py-2 duration-300 ease-in hover:scale-105">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 rounded-xl border p-4 md:col-span-2">
          <div className="p-2">
            <p className="pb-2 text-center font-semibold">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>TypeScript</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>Next.js</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>Tailwind CSS</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>SendGrid</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>Formik</p>
              </div>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer underline">Back</p>
        </Link>
      </div>
    </div>
  )
}
