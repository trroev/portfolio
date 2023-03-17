import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFileText,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [navBackground, setNavBackground] =
    useState<string>("#141414");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/memory-game" ||
      router.asPath === "/resume-builder" ||
      router.asPath === "/weather-app"
    ) {
      setNavBackground("transparent");
    } else {
      setNavBackground("#141414");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBackground}` }}
      className="fixed w-full h-20 z-[100] border-b border-white/50"
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" aria-label="Link to home page">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 hover:scale-110 ease-in duration-300 cursor-pointer" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="px-4 md:hidden cursor-pointer hover:text-red-400 hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#141414]/80"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] md:w-[45%] h-screen bg-[#141414] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 hover:scale-110 ease-in duration-300" />
              <div
                onClick={handleNav}
                className="p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b my-4 uppercase text-sm tracking-widest mt-12">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
              >
                <Link href="/#about">About</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
              >
                <Link href="/#skills">Skills</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
              >
                <Link href="/#projects">Projects</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
              >
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            <div className="border-t my-4 pt-4">
              <p className="uppercase tracking-widest">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  href="https://www.linkedin.com/in/trevormathiak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Trevor Mathiak LinkedIn page"
                >
                  <div>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  href="https://github.com/trroev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Trevor Mathiak Github page"
                >
                  <div>
                    <FaGithub />
                  </div>
                </a>
                <a
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  href="/pdf/Trevor_Mathiak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Trevor Mathiak resume"
                >
                  <div>
                    <AiOutlineFileText />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
