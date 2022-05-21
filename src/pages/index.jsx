import Head from "next/head";
import { PostList } from "../components/Post/Postlist.jsx";
import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../utility/const.js";
const Home = ({}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/posts`);
      if (!res.ok) {
        throw new Error("情報の取得に失敗しました。");
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      setError("エラー");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Head></Head>
      <div className="text-red-500">test</div>
      <PostList />
    </>
  );
};
export default Home;
