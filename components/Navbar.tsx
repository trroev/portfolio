import Link from "next/link";
import { useState } from "react";
import { Icons } from "./Icons";

interface LinkType {
  text: string;
  href: string;
}

const links: LinkType[] = [
  { text: "Home", href: "/" },
  { text: "About", href: "/#about" },
  { text: "Skills", href: "/#skills" },
  { text: "Projects", href: "/#projects" },
  { text: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="sticky top-0 w-full h-20 z-[100] bg-[#141414]/75 border-b border-slate-300 backdrop-blur">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" aria-label="Link to home page">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 hover:scale-110 ease-in duration-300 cursor-pointer" />
        </Link>
        <div>
          <nav>
            <ul className="hidden gap-6 md:flex">
              {links?.map((link, index) => (
                <li
                  key={index}
                  className="text-sm uppercase hover:text-red-400 hover:ease-in duration-300"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            onClick={handleNav}
            className="px-4 md:hidden cursor-pointer hover:text-red-400 hover:scale-110 ease-in duration-300"
          >
            <Icons.menu strokeWidth={1.5} />
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
              ? "fixed left-0 top-0 w-full h-screen bg-[#141414] p-6 sm:p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-4 border-b">
              <Link href="/" aria-label="Link to home page">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-red-600 hover:scale-110 ease-in duration-300"
                  onClick={() => setNav(false)}
                />
              </Link>
              <div
                onClick={handleNav}
                className="p-3 cursor-pointer hover:text-red-400 hover:scale-110 ease-in duration-300"
              >
                <Icons.close strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <nav>
              <ul className="uppercase">
                {links?.map((link, index) => (
                  <li
                    key={index}
                    className="py-4 text-sm hover:text-red-400 hover:ease-in duration-300"
                    onClick={() => setNav(false)}
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t my-4 pt-4">
              <p className="uppercase tracking-widest">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:justify-around">
                <a
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
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
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
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
                  className="hover:text-red-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
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
      </div>
    </header>
  );
};
