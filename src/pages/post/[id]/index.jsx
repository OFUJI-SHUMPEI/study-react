import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { Post } from "../../../components/Post/index.jsx";

const postid = ({}) => {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Post />
    </div>
  );
};
export default postid;
