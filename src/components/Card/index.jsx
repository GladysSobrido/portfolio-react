import { Link } from "react-router-dom";
import styles from "./card.module.css";
export default function Card({ project }) {
  console.log(project.id);
  return (
    <>
      <div className={styles.element}>
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
          <div className={styles.Linkto}>
            <Link to={`/projects/${project.id}`}>See more details...</Link>
          </div>
          {/* <Link to={`/movies/${movie.id}`}>Link1</Link> */}
        </li>
        <div className={styles.high}>
          {project.highlight ? (
            <img className={styles.insignia} src="../src/assets/insignia.png" />
          ) : undefined}
        </div>
      </div>
    </>
  );
}
