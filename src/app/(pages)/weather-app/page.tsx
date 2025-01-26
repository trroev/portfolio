import { BoxIcon } from '@/icons/Box'
import Image from 'next/image'
import Link from 'next/link'

export default function weatherWatchPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute top-0 left-0 z-10 h-[30vh] w-full bg-black/80 lg:h-[40vh]" />
        <Image
          blurDataURL="/assets/projects/weather_watch.webp"
          className="absolute z-1"
          fill
          style={{ objectFit: 'cover' }}
          src="/assets/projects/weather_watch.webp"
          alt="Screenshot for weather app"
          placeholder="blur"
        />
        <div className="absolute top-[70%] right-[50%] left-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-4">
          <h2 className="py-2">Weather App</h2>
          <h3>React.js</h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This was a simple vanilla JavaScript project to help strengthen my
            knowledge with implementing APIs. This app uses the OpenWeather API
            to let a user input any city and get the current weather in return.
          </p>
          <a
            href="https://trroev.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 mr-8 px-8 py-2 duration-300 ease-in hover:scale-105">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/weather-app"
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
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>JavaScript</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>OpenWeather API</p>
              </div>
              <div className="flex items-center gap-x-1 py-2">
                <BoxIcon className="size-5" />
                <p>npm</p>
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
