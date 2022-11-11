import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBackground, setNavBackground] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
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
      setLinkColor("#ecf0f3");
    } else {
      setNavBackground("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBackground}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-900 via-lime-500 to-emerald-700 hover:scale-110 ease-in duration-300 cursor-pointer" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
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
            className="px-4 md:hidden cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-900 via-lime-500 to-emerald-700 hover:scale-110 ease-in duration-300" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 uppercase text-sm tracking-widest text-gray-600 mt-12">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-lime-500">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/trevormathiak/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/trroev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="mailto:tmathiak@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
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
