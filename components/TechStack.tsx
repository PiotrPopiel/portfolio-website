"use client";

import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <motion.section
      className=" container p-3 md:p-10 mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", delay: 1.2 }}>
      <div className="flex gap-4 md:gap-8 justify-center items-center text-center text-2xl font-bold p-2">
        <h2>Tech Stack </h2>
        <div className="flex flex-wrap text-4xl gap-8 border-l border-black/5 dark:border-white/5 p-3 pl-8">
          <FaHtml5 className="text-[rgb(229,83,45)]" />
          <FaCss3Alt className="text-[rgb(45,83,229)]" />
          <SiJavascript className="text-[rgb(239,216,29)] bg-black" />
          <FaReact className="text-[rgb(102,219,251)]" />
          <SiTypescript className="text-[rgb(55,124,200)]" />
          <SiTailwindcss className="text-[rgb(62,191,248)]" />
          <FaGitAlt className="text-[rgb(240,85,57)]" />
        </div>
      </div>
    </motion.section>
  );
}

export default TechStack;
