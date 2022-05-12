import { Headline } from "./Headline.jsx";
import { Links } from "./Links.jsx";
import MainStyles from "./Main.module.css";

export function Main(props) {
  return (
    <main className={MainStyles.main}>
      <Headline page={props.page}>
        <code className={MainStyles.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
