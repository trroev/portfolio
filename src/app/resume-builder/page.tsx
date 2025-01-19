import Image from 'next/image'
import Link from 'next/link'
import { Icons } from '@/components/Icons'

import resumeImg from '../../../public/assets/projects/resume_builder.jpg'

export default function resumeBuilderPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute left-0 top-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
        <Image
          className="z-1 absolute"
          fill
          style={{ objectFit: 'cover' }}
          src={resumeImg}
          alt="Screenshot for resume builder app"
          placeholder="blur"
        />
        <div className="absolute left-[50%] right-[50%] top-[70%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-4">
          <h2 className="py-2">Resume Builder</h2>
          <h3>React.js</h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This was a fun little project for my first foray in to learning
            React. Using functional components and React Hooks made the code
            look much cleaner and easier to read and follow in my opinion. It
            was a struggle for me to figure out how to properly use props to get
            the user input to render in the resume preview, but once I figured
            that out, it was smooth sailing.
          </p>
          <a
            href="https://trroev.github.io/resume-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2 duration-300 ease-in hover:scale-105">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/resume-app"
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
            <p className="pb-2 text-center font-bold">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                React.js
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                Git
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                npm
              </p>
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
