import Image from "next/image";
import Link from "next/link";
import guidedGrowthImg from "../public/assets/projects/screenshot.webp";
import { RiRadioButtonFill } from "react-icons/ri";

const memoryGame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={guidedGrowthImg}
          alt="Screenshot for landing page of rachaelmathiak.com"
          placeholder="blur"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Memory Game</h2>
          <h3>React.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-3">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            One of my first freelance projects. I built this website
            using Next.js with TypeScript and TailwindCSS. I also
            utilized Formik to make the contact form, and the SendGrid
            email API to handle the contact form submission. This was
            my first time working with a client, and it was a good
            experience to get feedback in real time. While building, I
            learned that converting images to the .webp format is best
            practice.
          </p>
          <a
            href="https://www.rachaelmathiak.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/guided-growth-with-rachael"
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
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TailwindCSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SendGrid
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Formik
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
};

export default memoryGame;
