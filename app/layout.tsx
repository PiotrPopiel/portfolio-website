import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { ScreenWidthContextProvider } from "@/context/screenWidthContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Popiel Portfolio",
  description: "Piotr Popiel is a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden !scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden flex flex-col items-center  bg-gray-200 dark:bg-gray-950 dark:text-gray-50`}>
        <div className="w-full relative -z-10">
          <div className="bgCircle bg-teal-200 top-[-3rem] translate-x-[-80%]  "></div>
          <div className="bgCircle bg-sky-200  top-[-6rem]"></div>
        </div>
        <ActiveSectionContextProvider>
          <ScreenWidthContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-center" />
          </ScreenWidthContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
