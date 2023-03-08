import { AiOutlineFileText } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 border-t border-white/50 md:flex md:items-center md:justify-between md:p-6">
      <span className="px-3 text-sm sm:text-center">
        &copy; 2022 Trevor Mathiak
      </span>
      <div className="flex mt-4 space-x-10 justify-around md:mt-0">
        <a
          className="hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
          href="https://www.linkedin.com/in/trevormathiak/"
          target="_blank"
          rel="noreferrer"
          aria-label="Trevor Mathiak LinkedIn page"
        >
          <div className="w-5 h-5">
            <FaLinkedinIn />
          </div>
          <span className="sr-only">Linkedin page</span>
        </a>
        <a
          className="hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
          href="https://github.com/trroev/"
          target="_blank"
          rel="noreferrer"
          aria-label="Trevor Mathiak Github page"
        >
          <div className="w-5 h-5">
            <FaGithub />
          </div>
          <span className="sr-only">Github page</span>
        </a>
        <a
          className="hover:text-red-400 cursor-pointer hover:scale-110 ease-in duration-300"
          href="/pdf/Trevor_Mathiak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trevor Mathiak resume"
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
