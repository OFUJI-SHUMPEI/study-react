import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { Footer } from "../src/components/Footer/index.jsx";
import { Main } from "../src/components/Main/index.jsx";
import { Header } from "../src/components/Header/index.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Header />

      <Main page="about" />

      <Footer />
    </div>
  );
}
