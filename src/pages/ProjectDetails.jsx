import "./ProjectDetails.css";
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
      <div className="project">
        <h1>
          Project {ProjectId}: {selectedProject.title}
        </h1>
        <img src={`../${selectedProject.image}`} alt="" />
        <p>{selectedProject.description}</p>
        {selectedProject.media ? (
          <Link to={selectedProject.media}>Watch it now!</Link>
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
