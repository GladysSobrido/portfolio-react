import NavBar from "../NavBar";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.head}>
        <NavBar />
        {/* <h1 className={styles.title}>Portfolio of Gladys Sobrido</h1> */}
      </header>
    </>
  );
}

export default Header;
