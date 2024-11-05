import Link from "./Link";
import ProjectCard from "./ProjectCard";
import designoImg from "../assets/designo.png";
import audiophileImg from "../assets/audiophile-ecommerce.png";
import chatterImg from "../assets/chatter.png";
import shoppingCartImg from "../assets/shoppingCart.png";
import memoryImg from "../assets/memory.png";
import tictactoeImg from "../assets/tictactoe.png";
import jarrahBuildImg from "../assets/jarrahbuild.png";
import codeSydneyImg from "../assets/code_sydney_website.webp";
import classifiedAdsApp from "../assets/ustaa_website.webp";

const projects = [
  {
    title: "chatter live messenger",
    liveSite: "https://brodie-chatter-app.netlify.app/",
    github: "https://github.com/brodiehunt/live-messenger-server",
    img: chatterImg,
    alt: "Screenshot of a live messenger application homepage",
    tech: [
      "react",
      "express",
      "MongoDB",
      "Passport",
      "socket.io",
      "express-validator",
      "jest",
      "mongoose",
      "axios",
    ],
  },
  {
    title: "Code.Sydney Organisation Website",
    liveSite: "https://www.code.sydney/",
    github: "https://github.com/codesydney/Code.Sydney-Website",
    alt: "Screenshot of the Code.Sydney website hompage",
    img: codeSydneyImg,
    tech: [
      "NextJS",
      "SanityCMS",
      "Framer Motion",
      "React hook form",
      "zod",
      "emailjs",
    ],
  },
  {
    title: "audiophile ecommerce",
    liveSite: "https://brodie-audiophile.vercel.app/",
    github: "https://github.com/brodiehunt/audiophile",
    img: audiophileImg,
    alt: "Screenshot of the Audiophile project homepage",
    tech: ["nextJS", "css modules", "express", "mongodb", "stripe", "SSG"],
  },
  {
    title: "UST Alumni Australia Website",
    liveSite: "https://www.ustaa.au/",
    github: "https://github.com/codesydney/classified-ads-app-for-good",
    img: classifiedAdsApp,
    alt: "Screenshot of the UST Alumni Australia Website",
    tech: [
      "react",
      "redux",
      "react-router-dom",
      "react-testing-library",
      "tailwindcss",
      "yup",
      "axios",
      "express",
      "sendgrid",
      "s3",
    ],
  },
  {
    title: "designo studios",
    liveSite: "https://brodie-designo-studios.netlify.app/",
    github: "https://github.com/brodiehunt/designo-studio",
    img: designoImg,
    alt: "Screenshot of the Designo Studios project homepage",
    tech: [
      "react",
      "styled-components",
      "framer-motion",
      "leafletJs",
      "react-router",
    ],
  },
  {
    title: "Retail shop - Api",
    liveSite: "https://brodiehunt-shopping-cart.netlify.app/",
    github: "https://github.com/brodiehunt/shopping-cart",
    img: shoppingCartImg,
    alt: "Screenshot of the Retail shop project homepage",
    tech: ["react", "framer-motion", "API"],
  },
  {
    title: "Memory Game",
    liveSite: "https://brodiehunt-memory-game.netlify.app/",
    github: "https://github.com/brodiehunt/memory-game",
    img: memoryImg,
    alt: "Screenshot of the Memory Game",
    tech: ["react", "styled-components"],
  },
  {
    title: "Tic Tac Toe",
    liveSite: "https://brodiehunt-tic-tac-toe.netlify.app/",
    github: "https://github.com/brodiehunt/tic-tac-toe",
    img: tictactoeImg,
    alt: "Screenshot of the Tic Tac Toe Game",
    tech: ["react", "CSS"],
  },
  {
    title: "JarrahBuild",
    liveSite: "http://www.jarrahbuild.com.au/index.html",
    github: "",
    img: jarrahBuildImg,
    alt: "Screenshot of Jarrahbuild company website",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
];
export default function Projects() {
  return (
    <section className="projects-section">
      <header className="projects-header">
        <h2>Projects</h2>
        <Link url="#contact">Contact me</Link>
      </header>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
}
