import { ProjectItem } from "./ProjectItem";
import memoryGame from "../public/assets/memory-game.png";
import resumeApp from "../public/assets/resume-app.png";
import weatherApp from "../public/assets/weather-app.png";

export const Projects = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-amber-600">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Memory Game"
            img={memoryGame}
            tech="React.js"
            projectUrl="/memorygame"
          />
          <ProjectItem
            title="Resume Builder"
            img={resumeApp}
            tech="React.js"
            projectUrl="/resumebuilder"
          />
          <ProjectItem
            title="Weather App"
            img={weatherApp}
            tech="JavaScript, OpenWeatherAPI"
            projectUrl="/weatherapp"
          />
        </div>
      </div>
    </div>
  );
};
