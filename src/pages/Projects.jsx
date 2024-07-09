import Card from "../components/Card";
import styles from "./Projects.module.css";
import projects from "../data/projects";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
