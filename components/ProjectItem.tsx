import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  title: string;
  img: StaticImageData;
  tech: string;
  projectUrl: string;
};

export const ProjectItem = ({
  title,
  img,
  tech,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4 group">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="py-4 text-center rounded-lg bg-white text-[#141414] font-bold text-md cursor-pointer hover:bg-white/75 ease-in duration-300">
            Project Information
          </p>
        </Link>
      </div>
    </div>
  );
};
