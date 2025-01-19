import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectItemProps = {
  title: string
  img: StaticImageData
  alt: string
  tech: string
  projectUrl: string
}

export const ProjectItem = ({
  title,
  img,
  alt,
  tech,
  projectUrl,
}: ProjectItemProps) => {
  return (
    <div className="group relative flex h-full w-full items-center justify-center rounded-xl p-4">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={img}
        alt={alt}
        placeholder="blur"
      />
      <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <h3 className="text-center text-2xl tracking-wider">{title}</h3>
        <p className="pb-4 pt-2 text-center text-white">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-md cursor-pointer rounded-lg bg-white py-4 text-center font-bold text-[#141414] duration-300 ease-in hover:bg-white/75">
            Project Information
          </p>
        </Link>
      </div>
    </div>
  )
}
