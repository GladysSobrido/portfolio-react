import "./Projects.css";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="container">
        {projects.map((project) => (
          <div className="element" key={project.id}>
            <li>{project.title}</li>
            <li>
              <Link to={`/projects/${project.id}`}>
                <img src={`../${project.image}`} alt="" />
              </Link>
            </li>
            <li>
              <p>{project.description}</p>
            </li>
            <li>
              <div className="linkto">
                <Link to={`/projects/${project.id}`}>See more details...</Link>
              </div>
              {/* <Link to={`/movies/${movie.id}`}>Link1</Link> */}
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
