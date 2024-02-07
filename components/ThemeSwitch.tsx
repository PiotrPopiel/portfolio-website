"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="flex items-center justify-center bg-white h-10 w-auto text-xl rounded-full borderBlack max-sm:absolute max-sm:left-3 text-gray-800 px-5 gap-5 dark:bg-gray-900 dark:text-gray-50"
      onClick={toggleTheme}>
      <MdLightMode
        className={`${
          theme === "light" ? "text-3xl" : "text-base"
        } transition-all ease-in-out hover:scale-110`}
      />
      <MdDarkMode
        className={`${
          theme === "dark" ? "text-3xl" : "text-base"
        } transition-all ease-in-out hover:scale-110`}
      />
    </button>
  );
}

export default ThemeSwitch;
