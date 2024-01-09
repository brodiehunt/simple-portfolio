import githubIcon from '../assets/icon-github.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import linkedinIcon from '../assets/icon-linkedin.svg';


export default function Nav() {


  return (
    <nav className="nav">
      <div className="name">brodiehunt</div>
      <div className="links-container">
        <a href="https://github.com/brodiehunt" >
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="https://twitter.com/brodiehunt_" >
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="https://www.linkedin.com/in/brodie-hunt-8ab1311a4/" >
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
      </div>
    </nav>
  )
}