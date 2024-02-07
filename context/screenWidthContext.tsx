"use client";

import { createContext, useEffect, useState } from "react";

type screenWidthContextType = {
  width: number;
  setWidth?: React.Dispatch<React.SetStateAction<number>>;
};

//Context to watch the screen width

export const ScreenWidthContext = createContext<screenWidthContextType>(0);

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
