import { useCallback, useEffect, useReducer } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!responce.ok) {
    throw new Error("エラーが発生したため、データの取得を失敗しました。");
  }

  const json = responce.json();
  return json;
};

const usePosts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log({ data, error });

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
