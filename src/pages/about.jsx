import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Header } from "../components/Header/index.jsx";

const About = ({}) => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONplaceholdeのAPIを色々叩いてみるよ！</p>
    </div>
  );
};
export default About;
