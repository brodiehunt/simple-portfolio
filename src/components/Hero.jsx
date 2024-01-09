import personalPhoto from '../assets/IMG_3210.png';
import Link from './Link';

import Nav from './Nav';

export default function Hero() {

  return (
    <div className="hero">
      <Nav />
      <div className="img-container">
        <img src={personalPhoto} alt="Photo of brodie hunt"/>
      </div>
      <div className="content-container">
        <h1>
          Nice to meet you! I'm <span>Brodie Hunt</span>.
        </h1>
        <p className="hero-content">
          Based in Sydney, Aus. I'm a fullstack developer passionate about crafting dynamic and responsive web applications.
        </p>
        <Link url="#contact">Contact me</Link>
      </div>
    </div>
  )
}