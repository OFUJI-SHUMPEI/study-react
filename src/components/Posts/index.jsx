import { useCallback, useEffect, useReducer } from "react";
import useSWR from "swr";

export const Posts = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log({ data, error });

  if (!error && !data) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  if (data.length === 0) {
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
