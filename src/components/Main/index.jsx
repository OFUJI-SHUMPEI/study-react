import { Headline } from "../Headline/index.jsx";
import { Links } from "../Links/index.jsx";
import MainStyles from "./Main.module.css";
import { useEffect } from "react";

export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <main className={MainStyles.main}>
      <Headline page={props.page}>
        <code className={MainStyles.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
