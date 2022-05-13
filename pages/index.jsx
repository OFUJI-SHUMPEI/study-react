import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { Footer } from "../src/components/Footer/index.jsx";
import { Main } from "../src/components/Main/index.jsx";
import { Header } from "../src/components/Header/index.jsx";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head></Head>

      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
