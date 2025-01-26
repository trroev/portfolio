import Image from 'next/image'
import Link from 'next/link'

import { Icons } from '@/components/Icons'

export default function jamStatsPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute left-0 top-0 z-10 h-[30vh] w-full bg-[#141414]/80 lg:h-[40vh]" />
        <Image
          blurDataURL="/assets/projects/jamstats_splash.jpg"
          className="z-1 absolute"
          fill
          style={{ objectFit: 'cover' }}
          src="/assets/projects/jamstats_splash.webp"
          alt="Screenshot for landing page of rachaelmathiak.com"
          placeholder="blur"
        />
        <div className="absolute left-[50%] right-[50%] top-[70%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-4 text-white">
          <h2 className="py-2">JamStats: A Music Exploration App</h2>
          <h3>Next.js</h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app uses Next-Auth to allow a user to login using their Spotify
            account. Once logged in, the user can see some of their data, such
            as their favorite artists and tracks from different time ranges, as
            well as their favorite podcasts. OpenAI then uses this data to
            recommend 5 different bands to the user that are not included in the
            user&#39;s data.
          </p>
          <a
            href="https://jam-stats.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2 duration-300 ease-in hover:scale-105">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/jam-stats"
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
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                TypeScript
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                Next.js
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                TailwindCSS
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                Next-Auth
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                Framer Motion
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                Spotify Developer API
              </p>
              <p className="flex items-center py-2">
                <Icons.box strokeWidth={1.5} size={20} className="pr-1" />
                OpenAI API
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
