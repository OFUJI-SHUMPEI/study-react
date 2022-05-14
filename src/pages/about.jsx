import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/index.jsx";
import { Main } from "../components/Main/index.jsx";
import { Header } from "../components/Header/index.jsx";

const About = ({
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd,
  doubleCount,
}) => {
  return (
    <div className={styles.container}>
      <Head></Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>非表示</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />

      <Footer />
    </div>
  );
};
export default About;
