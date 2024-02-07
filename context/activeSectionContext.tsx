"use client";

import { navLinks } from "@/lib/data";
import { createContext, useContext, useState } from "react";

type SectionName = (typeof navLinks)[number]["name"] | "Home";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

//Context for active section and timer of last time that user clicked on navLink

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | ""
>("");

export default function activeSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === "") {
    throw new Error(
      "useActiveSectionContext must be use wihing an ActiveSectionContextProvider"
    );
  }

  return context;
}
