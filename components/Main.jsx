import { AiOutlineFileText } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 mt-12">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-orange-600">
              Trevor
            </span>
            , <br /> a full stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-orange-600">
              developer
            </span>
            <br /> who creates interactive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-orange-600">
              web
            </span>{" "}
            applications.
          </h1>
          <p className="uppercase text-sm tracking-widest text-gray-600 m-6">
            Let&#39;s build something together
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="text-gray-400 hover:text-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              className="text-gray-400 hover:text-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/trroev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FaGithub />
              </div>
            </a>
            <a
              className="text-gray-400 hover:text-gray-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
              href="/pdf/Trevor_Mathiak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <AiOutlineFileText />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
