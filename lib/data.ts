import portfolioImg from "@/public/portfolioImg.png";

export const navLinks = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    name: "My Portfolio",
    urlImg: portfolioImg,
    description: "My Porfolio. The site you are on right now.",
    urlLink: "https://piotr-popiel.vercel.app",
    gitHubLink: "https://github.com/PiotrPopiel/portfolio-website",
    tags: ["react", "tailwind", "typescript", "next.js"],
    id: 1,
  },
] as const;
