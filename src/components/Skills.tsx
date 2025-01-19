import Image from 'next/image'

import gitSVG from '../../public/svg/git.svg'
import javascriptSVG from '../../public/svg/javascript.svg'
import mongoDBSVG from '../../public/svg/mongodb.svg'
import nextSVG from '../../public/svg/nextjs.svg'
import nodeSVG from '../../public/svg/nodejs.svg'
import npmSVG from '../../public/svg/npm.svg'
import reactSVG from '../../public/svg/react.svg'
import tailwindSVG from '../../public/svg/tailwindcss.svg'
import typescriptSVG from '../../public/svg/typescript.svg'

type SkillBadgeProps = {
  svg: string
  name: string
  className?: string
}

const SkillBadge = ({ svg, name, className }: SkillBadgeProps) => {
  return (
    <Image
      src={svg}
      alt={name}
      className={
        className ||
        'm-1 h-10 w-max cursor-pointer duration-300 ease-in hover:scale-110 md:h-12 lg:h-16'
      }
    />
  )
}

export const Skills = () => {
  return (
    <div id="skills" className="w-full px-2 py-20">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="font-cal text-xl uppercase tracking-widest text-red-400">
          Skills
        </p>
        <h2 className="py-4 font-cal">What I Can Do</h2>
        <div className="mb-12 flex w-full flex-wrap items-center justify-center gap-8 self-center rounded-lg bg-gray-600/40 p-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
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
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <SkillBadge svg={mongoDBSVG} name="MongoDB" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <SkillBadge svg={nextSVG} name="Next.js" />
          </a>
          <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <SkillBadge svg={nodeSVG} name="Node.js" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <SkillBadge svg={reactSVG} name="React.js" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <SkillBadge
              svg={tailwindSVG}
              name="TailwindCSS"
              className="h-7 w-max cursor-pointer duration-300 ease-in hover:scale-105 lg:h-10"
            />
          </a>
          <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
            <SkillBadge svg={npmSVG} name="npm" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <SkillBadge svg={gitSVG} name="git" />
          </a>
        </div>
      </div>
    </div>
  )
}
