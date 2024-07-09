import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <div className={styles.content}>
        <p>E-Mail: g.sobrido@gmail.com</p>
        <p>WhatsApp: 0034 636 95 11 15</p>
        <p>Facebook: Gladys Sobrido</p>
        <p>Instagram: Gladys Sobrido</p>
      </div>
    </>
  );
}

export default Contact;
