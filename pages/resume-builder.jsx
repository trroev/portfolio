import Image from "next/image";
import Link from "next/link";
import React from "react";
import resumeImg from "../public/assets/projects/resume-app.png";
import { RiRadioButtonFill } from "react-icons/ri";

const resumeApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={resumeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Resume Builder</h2>
          <h3>React.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
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
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/resume-app"
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
        <div className="col-span-4 md:col-span-2 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Git
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                npm
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

export default resumeApp;
