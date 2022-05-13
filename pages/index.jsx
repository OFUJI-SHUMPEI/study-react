import Head from "next/head";
import styles from "../src/styles/Home.module.css";
import { Footer } from "../src/components/Footer/index.jsx";
import { Main } from "../src/components/Main/index.jsx";
import { Header } from "../src/components/Header/index.jsx";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setisShow] = useState(true);
  const [array, setArray] = useState([1.2]);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevcount) => prevcount + 1);
      }
    },
    [count]
  );

  const handleDisplay = () => {
    setisShow((previsShow) => !previsShow);
  };

  const handleChange = useCallback((e) => {
    if (e.target.value.length >= 5) {
      alert("5文字以下にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleAdd = useCallback(() => {
    return setArray((prevarray) => {
      if (prevarray.some((item) => item === text)) {
        alert("同じアイテムが含まれています");
        return prevarray;
      }

      return [...prevarray, text];
    });
  }, [text]);

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
