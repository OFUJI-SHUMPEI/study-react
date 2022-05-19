import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utility/fetcher";

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  const { data: posts, error: postsError } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    posts,
    post,
    user,
    error: postError || userError || postsError,
    isLoading:
      !post && !postError && !user && !userError && !posts && !postsError,
  };
};
