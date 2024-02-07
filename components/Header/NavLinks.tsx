import { navLinks } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useScreenWidthContext } from "@/context/screenWidthContext";

type isOpenType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavLinks({ isOpen, setIsOpen }: isOpenType) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { width } = useScreenWidthContext();

  const isMenuOpen = () => {
    if (width <= 639 && isOpen) {
      return "mobileNavOpen";
    } else if (width <= 639 && width !== 0) {
      return "mobileNav";
    } else {
      return "navBar";
    }
  };

  return (
    <ul className={isMenuOpen()}>
      {navLinks.map((link) => (
        <li key={link.hash}>
          <Link
            href={link.hash}
            onClick={() => {
              setIsOpen(false);
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
            className={`relative 
              ${!isOpen ? "navLinks" : "mobileNavLinks"} 
              ${
                activeSection === link.name &&
                "text-gray-950 dark:text-gray-200"
              }`}>
            {link.name}
            {link.name === activeSection && (
              <motion.span
                className="bg-sky-200  absolute rounded-full h-[3px] w-full bottom-0 left-0"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}></motion.span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
