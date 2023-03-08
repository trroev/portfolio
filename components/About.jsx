import Image from "next/image";
import Link from "next/link";
import headshot from "../public/trevor_headshot.png";

export const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="uppercase text-xl tracking-widest text-red-400">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <div className="text-justify px-4">
            <p className="py-2">
              As a self-taught full-stack software engineer, I have
              developed a strong passion for web development and
              demonstrated proficiency in creating, implementing, and
              maintaining highly-functional web applications.
              Additionally, my twelve years of experience as a chef
              has equipped me with valuable skills that are
              transferrable to software development, including
              efficiency, creativity, and attention to detail.
            </p>
            <p className="py-2">
              My expertise spans both front-end and backend
              development, and I have a proven track record of
              delivering exceptional results. In particular, I
              specialize in leveraging technologies such as React,
              JavaScript, Node.js, and MongoDB.
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
        </div>
        {/* <div className="flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={headshot} alt="headshot of Trevor Mathiak" />
        </div> */}
      </div>
    </div>
  );
};
