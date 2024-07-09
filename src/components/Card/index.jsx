import { Link } from "react-router-dom";
import styles from "./card.module.css";
export default function Card({ project }) {
  console.log(project.id);
  return (
    <>
      <div className={styles.element}>
        <li>{project.title}</li>
        <div className={styles.div1}>
          <li>
            <Link to={`/projects/${project.id}`}>
              <img
                className={styles.cardimg}
                src={`../${project.image}`}
                alt=""
              />
            </Link>
          </li>
          <div className={styles.div2}>
            <li>
              <p>{project.description}</p>
            </li>

            {/* Link */}
            <li>
              <div className={styles.Linkto}>
                <Link to={`/projects/${project.id}`}>See more details...</Link>
              </div>
            </li>
          </div>
        </div>

        {/* Insignia */}
        <div className={styles.high}>
          {project.highlight ? (
            <img className={styles.insignia} src="../src/assets/insignia.png" />
          ) : undefined}
        </div>
      </div>
    </>
  );
}
