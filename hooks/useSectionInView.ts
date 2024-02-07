import { ActiveSectionContext } from "@/context/activeSectionContext";
import { navLinks } from "@/lib/data";
import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";

type SectionName = (typeof navLinks)[number]["name"] | "Home";

//Sets active section if a section is in view, and prevents scroll "section in view" activation for a short periot of time.

export function useSectionInView(section: SectionName, amount: number) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection, timeOfLastClick } =
    useContext(ActiveSectionContext);

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
}
