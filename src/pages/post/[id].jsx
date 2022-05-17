import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const postid = ({}) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head></Head>
      <div>{router.query.id}</div>
    </div>
  );
};
export default postid;
