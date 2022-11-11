import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700 mt-12">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-lime-500 to-emerald-700">
              Trevor
            </span>
            , <br /> a full stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-lime-500 to-emerald-700">
              developer
            </span>
            <br /> who creates interactive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-900 via-lime-500 to-emerald-700">
              web
            </span>{" "}
            applications.
          </h1>
          <p className="uppercase text-sm tracking-widest text-gray-600 m-6">
            Let&#39;s build something together
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/trevormathiak/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/trroev/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:tmathiak@gmailcom" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
