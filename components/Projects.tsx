import { ProjectItem } from "./ProjectItem";
import guidedGrowthImg from "../public/assets/projects/screenshot.webp";
import memoryImg from "../public/assets/projects/memory-game.webp";
import resumeImg from "../public/assets/projects/resume-app.webp";
import weatherImg from "../public/assets/projects/weather-app.webp";

export const Projects = () => {
  return (
    <div id="projects" className="w-full px-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-400">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
