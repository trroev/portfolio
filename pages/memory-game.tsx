import Image from "next/image";
import Link from "next/link";
import memoryImg from "../public/assets/projects/memory-game.png";
import { Icons } from "../components/Icons";

const memoryGame = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={memoryImg}
          alt="Screenshot for memory game app"
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
            This was a fun app to build to get more familiar with
            hooks, especially useEffect. I learned that it seems a
            little easier to create css style components as well,
            rather than one large css file. Using logical comparisons
            in a prop and also a ternary operator for a jsx className
            were both new to me as well.
          </p>
          <a
            href="https://trroev.github.io/memory-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/trroev/memory-game"
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
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                React.js
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
                Git
              </p>
              <p className="py-2 flex items-center">
                <Icons.box
                  strokeWidth={1.5}
                  size={20}
                  className="pr-1"
                />
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
