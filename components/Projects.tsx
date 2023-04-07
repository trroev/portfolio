import { ProjectItem } from "./ProjectItem";
import guidedGrowthImg from "../public/assets/projects/screenshot.webp";
import memoryImg from "../public/assets/projects/memory-game.png";
import resumeImg from "../public/assets/projects/resume-app.png";
import weatherImg from "../public/assets/projects/weather-app.png";

export const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-2 mt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-400">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem
            title="Guided Growth with Rachael"
            img={guidedGrowthImg}
            tech="Next.js, TailwindCSS, SendGrid, Formik"
            projectUrl="/guided-growth"
          />
          <ProjectItem
            title="Memory Game"
            img={memoryImg}
            tech="React.js"
            projectUrl="/memory-game"
          />
          <ProjectItem
            title="Resume Builder"
            img={resumeImg}
            tech="React.js"
            projectUrl="/resume-builder"
          />
          <ProjectItem
            title="Weather App"
            img={weatherImg}
            tech="JavaScript, OpenWeatherAPI"
            projectUrl="/weather-app"
          />
        </div>
      </div>
    </div>
  );
};
