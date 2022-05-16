import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/index.jsx";
import { Main } from "../components/Main/index.jsx";
import { Header } from "../components/Header/index.jsx";
import { useCallback, useEffect, useState } from "react";

const Home = ({
  count,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
}) => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className={styles.container}>
      <Head></Head>
      <Header />
      <ol>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </div>
  );
};
export default Home;
