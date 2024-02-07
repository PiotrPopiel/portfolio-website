import { BiSolidHome } from "react-icons/bi";
import Link from "next/link";
import { ActiveSectionContext } from "@/context/activeSectionContext";
import { useContext } from "react";

export function HomeButton() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext);

  return (
    <Link
      href="#home"
      onClick={() => {
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
      }}
      className={`bg-white group  flex items-center justify-center  text-2xl sm:text-xl  rounded-full p-2  hover:text-gray-800 cursor-pointer max-sm:absolute dark:bg-gray-950 dark:hover:text-gray-200 ${
        activeSection === "Home"
          ? "border-sky-200 border-[3px]"
          : "border-gray-800/10 border-2"
      }`}>
      <BiSolidHome className="group-hover:scale-125 group-active:scale-110 transition-all ease-in-out" />
    </Link>
  );
}
