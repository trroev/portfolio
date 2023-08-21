import Image from "next/image";
import Link from "next/link";
import jamStatsImg from "../../../public/assets/projects/jamstats_splash.jpg";
import { Icons } from "@/components/Icons";

export default function jamStatsPage() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-[#141414]/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={jamStatsImg}
          alt="Screenshot for landing page of rachaelmathiak.com"
          placeholder="blur"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">JamStats: A Music Exploration App</h2>
          <h3>Next.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app uses Next-Auth to allow a user to login using
            their Spotify account. Once logged in, the user can see
            some of their data, such as their favorite artists and
            tracks from different time ranges, as well as their
            favorite podcasts. OpenAI then uses this data to recommend
            5 different bands to the user that are not included in the
            user&#39;s data.
          </p>
          <a
            href="https://jam-stats.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/jam-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-8 py-2 mt-4
            hover:scale-105 ease-in duration-300"
            >
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-2 rounded-xl p-4 border">
          <div className="p-2">
            <p className="text-center font-semibold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                TypeScript
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                Next.js
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                TailwindCSS
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                Next-Auth
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                Framer Motion
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                Spotify Developer API
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                OpenAI API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
