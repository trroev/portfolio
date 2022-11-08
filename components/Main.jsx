import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-12">
            Let&#39;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-amber-600 to-red-600">
              Trevor
            </span>
            , <br /> a full stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-amber-600 to-red-600">
              developer
            </span>
            <br /> who creates interactive
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-amber-600 to-red-600">
              web
            </span>{" "}
            applications.
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            adipisci possimus vel sunt libero! Pariatur?
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
