import "./Projects.css";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

//const movie = movies.find((movie) => movie.id == movieId);
function ProjectDetails() {
  const { ProjectId } = useParams();
  const selectedProject = projects.find((project) => project.id == ProjectId);
  return (
    <>
      <h1>
        Project {ProjectId}: {selectedProject.title}
      </h1>
      Image: {selectedProject.image}
      <img src={selectedProject.image} alt="" />
      <img src={selectedProject.image} alt="" />
      <p>{selectedProject.description}</p>
      <h1></h1>
    </>
  );
}

export default ProjectDetails;
