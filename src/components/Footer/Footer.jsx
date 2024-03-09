import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SeeUInWeb</div>
      <div className={styles.text}>
        seeuinweb protofolio creations © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
