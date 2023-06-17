import styles from "./Copyright.module.scss";

function Copyright() {
  const year = new Date().getFullYear();

  return <small className={styles.copyright}>Copyright © {year}</small>;
}

export { Copyright };
