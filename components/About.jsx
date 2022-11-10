import Image from "next/image";
import Link from "next/link";
import headshot from "../public/trevor_headshot.png";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-amber-600">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            neque atque cumque, distinctio cupiditate reprehenderit,
            exercitationem dicta doloribus natus nisi possimus est sunt quisquam
            dolor. Voluptatibus tempore, eveniet error officiis id est vel
            beatae, aliquam, sed nesciunt blanditiis odit earum!
          </p>
          <p className="py-2 text-gray-600">
            Check out some of my latest{" "}
            <Link href="/#projects">
              <span className="cursor-pointer text-amber-600">projects</span>
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={headshot} alt="headshot of Trevor Mathiak" />
        </div>
      </div>
    </div>
  );
};
