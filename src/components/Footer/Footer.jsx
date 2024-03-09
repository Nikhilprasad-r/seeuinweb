import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Seeuinweb</div>
      <div className={styles.text}>
        Seeuinweb development assistance © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
