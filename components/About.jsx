import Image from "next/image";
import Link from "next/link";
import headshot from "../public/trevor_headshot.png";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-400">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            I&#39;m a full stack software engineer with a keen
            interest for web development. I have a proven track record
            of creating, implementing and maintaining successful web
            applications, both front and back-end. I am especially
            fond of working with React, JavaScript and Node.js.
          </p>
          <p className="py-2">
            I am completely self-taught, and I&#39;m passionate about
            learning new technologies and anything related to web
            development.
          </p>
          <p className="py-2">
            Check out some of my latest{" "}
            <Link href="/#projects">
              <span className="cursor-pointer text-red-400">
                projects
              </span>
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={headshot} alt="headshot of Trevor Mathiak" />
        </div>
      </div>
    </div>
  );
};
