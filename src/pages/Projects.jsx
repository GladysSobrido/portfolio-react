import "./Projects.css";
import projects from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ul className="container">
        {projects.map((project) => (
          <ul className="element" key={project.id}>
            <li>{project.title}</li>
            <li>
              <img src={project.image} alt="" />
            </li>
            <li>
              <p>{project.description}</p>
            </li>
            <li>
              <Link to={`/projects/${project.id}`}>See more details...</Link>
              {/* <Link to={`/movies/${movie.id}`}>Link1</Link> */}
            </li>
          </ul>
        ))}
      </ul>
    </>
  );
}

export default Projects;
