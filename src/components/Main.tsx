import { GitHubIcon } from '@/icons/GitHub'
import { LinkedInIcon } from '@/icons/LinkedIn'
import { ResumeIcon } from '@/icons/Resume'

export const Main = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-center p-2 py-16">
        <div>
          <h1 className="mt-12 py-4 font-cal text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&#39;m <span className="text-primary">Trevor</span>, <br /> a
            full stack developer
            <br /> who creates interactive
            <br />
            web applications.
          </h1>
          <p className="m-6 text-sm uppercase tracking-widest">
            Crafting Creative Solutions Through Collaboration
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <a
              className="size-6 cursor-pointer text-foreground duration-300 ease-in hover:scale-110 hover:text-primary"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak LinkedIn page"
            >
              <LinkedInIcon />
              <span className="sr-only">Linkedin page</span>
            </a>
            <a
              className="size-6 cursor-pointer text-foreground duration-300 ease-in hover:scale-110 hover:text-primary"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak Github page"
            >
              <GitHubIcon />
              <span className="sr-only">Github page</span>
            </a>
            <a
              className="size-6 cursor-pointer text-foreground duration-300 ease-in hover:scale-110 hover:text-primary"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak resume"
            >
              <ResumeIcon />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
