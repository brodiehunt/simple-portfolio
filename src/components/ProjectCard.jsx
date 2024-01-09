
import Link from "./Link"
export default function ProjectCard({project}) {

  return (
    <article className="project-card">
      <div className="project-img-container">
        <img src={project.img} alt={`${project.title} screenshot`} />
      </div>
      <div className="card-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="tech-stack">
          {project.tech.map((item, index) => {
            return (
              <div key={index} className="tech">{item}</div>
            )
          })}
        </div>
        <div className="buttons-container">
          <Link url={project.liveSite} label={`Go to ${project.title} live site`}>
            View Project
          </Link>
          <Link url={project.github} label={`Go to ${project.title} github repository`}>
            View Code
          </Link>
        </div>
      </div>
    </article>
  )
}