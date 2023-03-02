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
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBackground, setNavBackground] = useState("");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/memory-game" ||
      router.asPath === "/resume-builder" ||
      router.asPath === "/weather-app"
    ) {
      setNavBackground("transparent");
    }
  }, [router]);

  return (
    <div className="fixed w-full h-20 z-[100] bg-[#141414] border-b border-white/50">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 hover:scale-110 ease-in duration-300 cursor-pointer" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
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
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                >
                  Contact
                </li>
              </Link>
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
