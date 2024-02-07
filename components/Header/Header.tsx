"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeSwitch from "../ThemeSwitch";
import { motion } from "framer-motion";
import { HomeButton } from "./HomeButton";
import { NavLinks } from "./NavLinks";
import { useScreenWidthContext } from "@/context/screenWidthContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useScreenWidthContext();

  if (width >= 640 && isOpen) {
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-50 fixed w-full flex justify-center sm:top-5 scroll-mt-[100rem]">
      <motion.nav
        className="bg-gray-50 relative flex justify-around items-center w-full sm:w-[42rem] sm:rounded-full px-10 py-2 gap-10 max-sm:h-[4rem] borderBlack dark:bg-gray-950 dark:text-gray-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}>
        <HomeButton />
        <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
        <ThemeSwitch />
        {!isOpen ? (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-neutral-950 h-10 w-10 sm:hidden absolute top-[50%] translate-y-[-50%] left-[80%] cursor-pointer dark:text-gray-50"
          />
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-neutral-950 h-10 w-10 sm:hidden absolute top-[50%] translate-y-[-50%] left-[80%] cursor-pointer  dark:text-gray-50"
          />
        )}
      </motion.nav>
    </header>
  );
}
