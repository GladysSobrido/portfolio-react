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
          //       <div className={styles.element}>
          //     <li>{project.title}</li>
          //     <li>
          //       <Link to={`/projects/${project.id}`}>
          //         <img src={`../${project.image}`} alt="" />
          //       </Link>
          //     </li>
          //     <li>
          //       <p>{project.description}</p>
          //     </li>
          //     <li>
          //       <div className={styles.Linkto}>
          //         <Link to={`/projects/${project.id}`}>See more details...</Link>
          //       </div>
          //       {/* <Link to={`/movies/${movie.id}`}>Link1</Link> */}
          //     </li>
          //   </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
