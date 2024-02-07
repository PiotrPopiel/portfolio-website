"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

function About() {
  const { ref } = useSectionInView("About", 0.7);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="container md:p-20 flex flex-col gap-8 items-center text-center mt-28 mb-28 scroll-mt-36 p-5"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
      viewport={{ once: true }}>
      <h3 className="text-3xl font-bold pt-5 mb-5">About Me</h3>
      <p className="leading-7 text-lg">
        I am a technology enthusiast and creative individual specializing in
        front-end development. It is my pleasure to introduce myself as a junior
        front-end developer, I strive not only to craft aesthetically pleasing
        and responsive websites but also to continually enhance my skills.
      </p>
      <p className="leading-7 text-lg mb-8">
        My primary goal is continuous skill improvement and knowledge expansion.
        I always aim to deliver high-quality code, paying attention to details
        and using best programming practices.
      </p>
      <div className="text-left p-4 text-lg">
        <ul className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold mb-5">My Skills:</h2>
          <li>
            <span className="font-semibold">HTML/CSS: </span> Creating semantic
            structures, styling with a focus on responsiveness(flexbox, grid,
            media queries)
          </li>
          <li>
            <span className="font-semibold">JavaScript: </span> Asynchronous
            Programming, Functional Programming, DOM manipulation and event
            handlers, Fetching Data, Closure.
          </li>
          <li>
            <span className="font-semibold">React: </span>Functional Components,
            JSX, Virtual DOM, Rendering, Hooks, Client/Server Components.
          </li>
          <li>
            <ul className="flex flex-col gap-1">
              <p className="mb-1 mt-3 font-semibold">Other:</p>
              <li>- Node</li>
              <li>- Typescript</li>
              <li>- Tailwind</li>
              <li>- Git</li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="text-lg">
        I&lsquo;m ready to take on new projects, grow professionally, and
        collaborate with passionate individuals. If you have any questions or
        proposals, feel free to reach out to me!
      </p>
    </motion.section>
  );
}

export default About;
