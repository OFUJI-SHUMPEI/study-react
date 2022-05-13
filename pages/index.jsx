import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { Footer } from "../src/components/Footer/index.jsx";
import { Main } from "../src/components/Main/index.jsx";
import { Header } from "../src/components/Header/index.jsx";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head></Head>

      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
