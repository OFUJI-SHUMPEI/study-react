import { Headline } from "../Headline/index.jsx";
import { Links } from "../Links/index.jsx";
import MainStyles from "./Main.module.css";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    discription: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    discription: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples →",
    discription: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    discription:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
  }, []);
  return (
    <main className={MainStyles.main}>
      <Headline page={props.page}>
        <code className={MainStyles.code}>pages/{props.page}.js</code>
      </Headline>

      <Links items={items} handleClick={handleReduce} />
    </main>
  );
};
