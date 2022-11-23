import { AiOutlineFileText } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6">
      <span className="px-3 text-sm text-gray-500 sm:text-center">
        &copy; 2022 Trevor Mathiak
      </span>
      <div className="flex mt-4 space-x-10 justify-around md:mt-0">
        <a
          className="text-gray-400 hover:text-gray-900 cursor-pointer hover:scale-110 ease-in duration-300"
          href="https://www.linkedin.com/in/trevormathiak/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-5 h-5">
            <FaLinkedinIn />
          </div>
          <span className="sr-only">Linkedin page</span>
        </a>
        <a
          className="text-gray-400 hover:text-gray-900 cursor-pointer hover:scale-110 ease-in duration-300"
          href="https://github.com/trroev/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-5 h-5">
            <FaGithub />
          </div>
          <span className="sr-only">Github page</span>
        </a>
        <a
          className="text-gray-400 hover:text-gray-900 cursor-pointer hover:scale-110 ease-in duration-300"
          href="/pdf/Trevor_Mathiak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-5 h-5">
            <AiOutlineFileText />
          </div>
          <span className="sr-only">Resume</span>
        </a>
      </div>
    </footer>
  );
};
