import { ProjectItem } from "./ProjectItem";
import jamStatsImg from "../../public/assets/projects/jamstats_splash.jpg";
import guidedGrowthImg from "../../public/assets/projects/screenshot.webp";
import memoryImg from "../../public/assets/projects/memory-game.webp";
import resumeImg from "../../public/assets/projects/resume_builder.jpg";
import weatherImg from "../../public/assets/projects/weather_watch.jpg";

export const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="font-cal uppercase text-xl tracking-widest text-red-400">
          Projects
        </p>
        <h2 className="font-cal py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};
