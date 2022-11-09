import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-800 via-amber-600 to-red-600 hover:scale-110 ease-in duration-300"></div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="px-4 md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
