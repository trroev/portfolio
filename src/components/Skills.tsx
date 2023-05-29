import Image from "next/image";
import javascriptSVG from "../../public/svg/javascript.svg";
import typescriptSVG from "../../public/svg/typescript.svg";
import mongoDBSVG from "../../public/svg/mongodb.svg";
import nextSVG from "../../public/svg/nextjs.svg";
import nodeSVG from "../../public/svg/nodejs.svg";
import reactSVG from "../../public/svg/react.svg";
import tailwindSVG from "../../public/svg/tailwindcss.svg";
import npmSVG from "../../public/svg/npm.svg";
import gitSVG from "../../public/svg/git.svg";

type SkillBadgeProps = {
  svg: string;
  name: string;
  className?: string;
};

const SkillBadge = ({ svg, name, className }: SkillBadgeProps) => {
  return (
    <Image
      src={svg}
      alt={name}
      className={
        className ||
        "hover:scale-110 ease-in duration-300 cursor-pointer h-10 m-1 w-max md:h-12 lg:h-16"
      }
    />
  );
};

export const Skills = () => {
  return (
    <div id="skills" className="w-full px-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-400">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="bg-gray-600/40 rounded-lg mb-12 flex w-full self-center flex-wrap items-center justify-center gap-8 p-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={javascriptSVG} name="JavaScript" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={typescriptSVG} name="TypeScript" />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={mongoDBSVG} name="MongoDB" />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={nextSVG} name="Next.js" />
          </a>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={nodeSVG} name="Node.js" />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={reactSVG} name="React.js" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge
              svg={tailwindSVG}
              name="TailwindCSS"
              className="hover:scale-105 ease-in duration-300 cursor-pointer h-7 w-max lg:h-10"
            />
          </a>
          <a
            href="https://www.npmjs.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={npmSVG} name="npm" />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SkillBadge svg={gitSVG} name="git" />
          </a>
        </div>
      </div>
    </div>
  );
};
