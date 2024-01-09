import Link from "./Link";
import ProjectCard from "./ProjectCard";
import designoImg from '../assets/designo.png';
import chatterImg from '../assets/chatter.png';
import shoppingCartImg from '../assets/shoppingCart.png';
import memoryImg from '../assets/memory.png';
import tictactoeImg from '../assets/tictactoe.png';
import jarrahBuildImg from '../assets/jarrahbuild.png';

const projects = [
  {
    title: 'designo studios',
    liveSite: 'https://brodie-designo-studios.netlify.app/',
    github: 'https://github.com/brodiehunt/designo-studio',
    img: designoImg,
    tech: ['react', 'styled-components', 'framer-motion', 'leafletJs', 'react-router'],
  },
  {
    title: 'chatter live messenger',
    liveSite: 'https://brodie-chatter-app.netlify.app/',
    github: 'https://github.com/brodiehunt/live-messenger-server',
    img: chatterImg,
    tech: ['react', 'express', 'MongoDB', 'Passport', 'socket.io', 'express-validator', 'jest', 'mongoose', 'axios'],
  },
  {
    title: 'Retail shop - Api',
    liveSite: 'https://brodiehunt-shopping-cart.netlify.app/',
    github: 'https://github.com/brodiehunt/shopping-cart',
    img: shoppingCartImg,
    tech: ['react', 'framer-motion', 'API']
  },
  {
    title: 'Memory Game',
    liveSite: 'https://brodiehunt-memory-game.netlify.app/',
    github: 'https://github.com/brodiehunt/memory-game',
    img: memoryImg,
    tech: ['react', 'styled-components',]
  },
  {
    title: 'Tic Tac Toe',
    liveSite: 'https://brodiehunt-tic-tac-toe.netlify.app/',
    github: 'https://github.com/brodiehunt/tic-tac-toe',
    img: tictactoeImg,
    tech: ['react', 'CSS',]
  },
  {
    title: 'JarrahBuild',
    liveSite: 'http://www.jarrahbuild.com.au/index.html',
    github: '',
    img: jarrahBuildImg,
    tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap']
  }
]
export default function Projects() {

  return (
    <section className="projects-section">
      <header className='projects-header'>
        <h2>Projects</h2>
        <Link url="#contact">Contact me</Link>
      </header>
      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={index} project={project}/>
          )
        })}
      </div>
    </section>
  )
}