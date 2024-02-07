"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useContext } from "react";
import { ScreenWidthContext } from "@/context/screenWidthContext";

function Projects() {
  const { width } = useContext(ScreenWidthContext);

  let amount: number = 0.7;

  if (width < 773) {
    amount = 0.3;
  }

  const { ref } = useSectionInView("Projects", amount);

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="flex flex-col items-center w-full mt-28 mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", delay: 0.8 }}
      viewport={{ once: true }}>
      <div className="container text-center mb-5">
        <h2 className="text-3xl font-bold p-5">My Projects</h2>
      </div>

      <ul className="flex flex-row justify-center flex-wrap gap-10 mx-[5%]">
        {projects.map((project) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3 * project.id,
              type: "spring",
            }}
            viewport={{ once: true }}>
            <ProjectCard {...project} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Projects;
