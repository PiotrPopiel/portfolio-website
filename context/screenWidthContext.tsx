"use client";

import { createContext, useContext, useEffect, useState } from "react";

type screenWidthContextType = {
  width: number;
  setWidth?: React.Dispatch<React.SetStateAction<number>>;
};

//Context to watch the screen width

export const ScreenWidthContext = createContext<screenWidthContextType | 0>(0);

export function ScreenWidthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <ScreenWidthContext.Provider value={{ width }}>
      {children}
    </ScreenWidthContext.Provider>
  );
}

export function useScreenWidthContext() {
  const context = useContext(ScreenWidthContext);

  if (context === 0) {
    throw new Error(
      "useScreenWidthContext must be use wihing an ScreenWidthContextProvider"
    );
  }

  return context;
}
