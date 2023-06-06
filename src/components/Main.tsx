import { Icons } from "./Icons";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full mx-auto p-2 py-16 flex justify-center items-center">
        <div>
          <h1 className="font-cal text-3xl sm:text-5xl md:text-6xl lg:text-7xl py-4 mt-12">
            Hi, I&#39;m <span className="text-red-400">Trevor</span>,{" "}
            <br /> a full stack developer
            <br /> who creates interactive
            <br />
            web applications.
          </h1>
          <p className="uppercase text-sm tracking-widest m-6">
            Crafting Creative Solutions Through Collaboration
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="hover:text-red-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak LinkedIn page"
            >
              <div>
                <Icons.linkedIn strokeWidth={1.5} />
              </div>
            </a>
            <a
              className="hover:text-red-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak Github page"
            >
              <div>
                <Icons.gitHub strokeWidth={1.5} />
              </div>
            </a>
            <a
              className="hover:text-red-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trevor Mathiak resume"
            >
              <div>
                <Icons.resume strokeWidth={1.5} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
