import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.homeimg} src="src/assets/gladys.png" alt="" />
        <div>
          <div className={styles.content}>
            <h1>Welcome to my page</h1>
            <p>
              Here you will find different projects that I have done during the
              last 20 years.
            </p>
            <p>
              If you need me to make a project for you don´t doubt to contact me
              thougth any of the means you will find in the
              <Link className={styles.homelink} to="/contact">
                Contact
              </Link>
              section.
            </p>
            <p>
              If you are curious about how did I get to create all this things
              you will find more information about me in the
              <Link to="/about">About</Link> section.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
