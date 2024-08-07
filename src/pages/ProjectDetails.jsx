import styles from "./ProjectDetails.module.css";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

//const movie = movies.find((movie) => movie.id == movieId);

function ProjectDetails() {
  const goto = useNavigate();
  const { ProjectId } = useParams();
  const selectedProject = projects.find((project) => project.id == ProjectId);
  return (
    <>
      <div className={styles.project}>
        <h1>
          Project {ProjectId}: {selectedProject.title} hello
        </h1>

        <img
          className={styles.projectdetimg}
          src={`../${selectedProject.image}`}
          alt=""
        />
        <p>
          {selectedProject.longDescription
            ? `${selectedProject.longDescription}`
            : `${selectedProject.description}`}
        </p>
        {selectedProject.media ? (
          <Link
            target="_blank"
            className={styles.Linkto}
            to={selectedProject.media}
          >
            Watch it now!
          </Link>
        ) : (
          <p></p>
        )}
        <button onClick={() => goto("../")}>
          Back to the list of projects
        </button>
        {/* <button onClick=[())=>goto("../")]> Go back home</button> */}
      </div>
    </>
  );
}

export default ProjectDetails;
