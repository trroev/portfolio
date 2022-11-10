import Image from "next/image";
import Link from "next/link";
import React from "react";
import memoryImg from "../public/assets/projects/memory-game.png";
import { RiRadioButtonFill } from "react-icons/ri";

const memoryGame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={memoryImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Memory Game</h2>
          <h3>React.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            voluptatem necessitatibus, animi obcaecati saepe, hic unde eius
            expedita alias aspernatur minima enim non ipsum inventore sunt
            tempore, ad illo. Optio odit veniam distinctio sunt pariatur,
            cupiditate provident laborum neque repudiandae?
          </p>
          <a
            href="https://trroev.github.io/memory-game/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/memory-game"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="px-8 py-2 mt-4
            hover:scale-105 ease-in duration-300"
            >
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
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

export default memoryGame;
