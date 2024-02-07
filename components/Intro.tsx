"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import avatar from "@/public/avatar.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.8);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="container flex flex-col justify-center items-center gap-8 sm:p-16 p-5 mt-5 lg:p-20  borderBlack scroll-mt-[100rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", delay: 0.8 }}>
      <div className=" flex flex-col items-center text-center md:flex-row-reverse md:gap-16 p-5">
        <Image
          src={avatar}
          alt="Photo"
          quality={95}
          className="h-40 w-40 md:h-48 md:w-48 rounded-full border-white border-[0.3rem] shadow-md mb-5 object-cover"
        />
        <div className="max-w-[600px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Front-End React Developer
          </h1>
          <br />
          <p className="text-xl md:text-2xl font-semibold py-2 mx-10 ">
            Hello I&lsquo;m <span className="font-bold">Piotr Popiel </span>.
            I&lsquo;m a self-taught{" "}
            <span className="font-bold">Fronted Developer</span>. I am ready to
            collaborate on exciting projects. My main focus is{" "}
            <span className="font-bold">React </span>
            (Next.js).
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 items-center md:flex-row md:justify-around w-full p-5">
        <Link
          href="#contact"
          className="flex items-center bg-gray-950 text-gray-50 rounded-full px-5 py-3 gap-3  hover:bg-gray-800 transition shadow-md text-xl hover:scale-110 focus:scale-105 active:scale-105 font-bold dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-200">
          Contact Me <BsArrowRight />
        </Link>
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/piotr-popiel-7816a42b3"
            target="_blank"
            className="bg-gray-50 shadow-md p-4 rounded-full text-2xl hover:scale-110 focus:scale-110 active:scale-105 transition text-gray-950 hover:text-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:text-gray-200">
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/PiotrPopiel"
            target="_blank"
            className="bg-gray-50 shadow-md p-4 rounded-full text-2xl hover:scale-110 focus:scale-110 active:scale-105 transition text-gray-950 hover:text-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:text-gray-200">
            <BsGithub />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
