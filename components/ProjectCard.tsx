import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

type projectProps = (typeof projects)[number];

function ProjectCard({
  name,
  urlImg,
  description,
  urlLink,
  gitHubLink,
  tags,
}: projectProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-sky-50 flex flex-col justify-between  items-center h-[36rem] w-[20rem]  rounded-lg shadow-md  mt-10 text-gray-800 border border-black/5 overflow-hidden dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-900 dark:text-gray-50">
      <Link
        href={urlLink}
        target="_blank"
        className="group relative cursor-pointer ">
        <Image
          src={urlImg}
          alt={name}
          className="group-hover:scale-110 transition"
        />
        <div className="backdrop-blur-lg absolute bottom-7 h-[4rem] w-full  p-3 flex items-center justify-center border-t border-b shadow-lg ">
          <div className="absolute w-full h-full bg-gray-50 opacity-70 dark:bg-gray-950 dark:opacity-60"></div>
          <h3 className="z-10 text-2xl font-semibold ">{name}</h3>
        </div>
      </Link>
      <div className="flex flex-col gap-5 p-5">
        <p className="text-lg p-3 font-medium border-b leading-relaxed mb-[1rem]">
          {description}
        </p>

        <Link
          href={gitHubLink}
          target="_blank"
          className="bg-gray-950 text-gray-50 flex gap-4 items-center p-2 w-[80%] rounded-full hover:bg-gray-800 transition hover:scale-[1.03] focus:scale-[1.03] active:scale-100 dark:bg-gray-100 dark:text-gray-950 font-bold">
          <FaGithub className="text-xl ml-3" /> <p>Git Hub Link</p>
        </Link>
        <ul className="flex flex-wrap gap-4  uppercase tracking-wider text-[10px]">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-gray-300 px-3 py-2  rounded-full dark:bg-gray-950">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
