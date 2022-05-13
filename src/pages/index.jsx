import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/index.jsx";
import { Main } from "../components/Main/index.jsx";
import { Header } from "../components/Header/index.jsx";
import { useCounter } from "../hooks/useCounter";
import { useInputarray } from "../hooks/useInputarray";
import { useBgLightBlue } from "../hooks/useBgLightBlue";

export default function Home(props) {
  console.log(props);
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputarray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Head></Head>

      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>非表示</button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />

      <Footer />
    </div>
  );
}
