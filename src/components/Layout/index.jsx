import styles from "../../styles/Home.module.css";

export const Layout = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};
