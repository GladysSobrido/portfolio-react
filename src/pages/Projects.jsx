import "./Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="container">
        {projects.map((project) => (
          <ul className="element" key={project.id}>
            <li>{project.title}</li>
            <li>
              <img src={project.image} alt="" />
            </li>
            <li>
              <p>{project.description}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Projects;
