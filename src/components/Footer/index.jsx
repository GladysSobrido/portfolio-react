import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footermenu}>
          <Link to="https://github.com/GladysSobrido">Impressum</Link>
          <Link to="https://github.com/GladysSobrido">GitHub</Link>
        </div>
        <div className={styles.footertext}>
          <h5>Copyrigth: Gladys Sobrido </h5>
          <h5>This website was started to be built in July 2024.</h5>
        </div>
      </div>

      {/*  */}
    </>
  );
}

export default Footer;
