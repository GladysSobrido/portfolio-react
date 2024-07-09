import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className={styles.content}>
        <p>E-Mail: g.sobrido@gmail.com</p>
        <p>Phone:+49&nbsp;171&nbsp;91&nbsp;833&nbsp;07</p>
        <p>Facebook: Gladys Sobrido</p>
        <p>Instagram: Gladys Sobrido</p>
      </div>
    </>
  );
}

export default Contact;
