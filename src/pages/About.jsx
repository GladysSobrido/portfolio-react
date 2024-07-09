import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About</h1>
      <div className={styles.about}>
        <img src="src/assets/gladys02.png" alt="" />
        <div>
          <p> Gladys Sobrido was born in Madrid (Spain).</p>
          <p>
            Studied Audiovisual Communication in the Universidad Rey Juan Carlos
            (Madrid)
          </p>
          <p>Has lived in Amsterdam, Athens, Berlin & Munich.</p>

          <p></p>
        </div>
      </div>
    </>
  );
}

export default About;
