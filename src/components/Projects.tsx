import jamStatsImg from '../../public/assets/projects/jamstats_splash.jpg'
import memoryImg from '../../public/assets/projects/memory-game.webp'
import resumeImg from '../../public/assets/projects/resume_builder.jpg'
import guidedGrowthImg from '../../public/assets/projects/screenshot.webp'
import weatherImg from '../../public/assets/projects/weather_watch.jpg'
import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-20">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="font-cal text-xl uppercase tracking-widest text-red-400">
          Projects
        </p>
        <h2 className="py-4 font-cal">What I&#39;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectItem
            title="JamStats"
            img={jamStatsImg}
            alt="Screenshot of landing page for https://jam-stats.vercel.app/"
            tech="Next.js, TailwindCSS, Next-Auth, Framer Motion"
            projectUrl="/jam-stats"
          />
          <ProjectItem
            title="Guided Growth with Rachael"
            img={guidedGrowthImg}
            alt="Screenshot of landing page for rachaelmathiak.com"
            tech="Next.js, TailwindCSS, SendGrid, Formik"
            projectUrl="/guided-growth"
          />
          <ProjectItem
            title="Memory Game"
            img={memoryImg}
            alt="Screenshot for memory game app"
            tech="React.js"
            projectUrl="/memory-game"
          />
          <ProjectItem
            title="Resume Builder"
            img={resumeImg}
            alt="Screenshot for resume builder app"
            tech="React.js"
            projectUrl="/resume-builder"
          />
          <ProjectItem
            title="Weather App"
            img={weatherImg}
            alt="Screenshot for weather app"
            tech="JavaScript, OpenWeatherAPI"
            projectUrl="/weather-app"
          />
        </div>
      </div>
    </div>
  )
}
