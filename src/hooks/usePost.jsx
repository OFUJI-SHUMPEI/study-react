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

  const { data: comments, error: commentsError } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  const { data: comment, error: commentError } = useSWR(
    `https://jsonplaceholder.typicode.com/comments/${router.query.id}`,
    fetcher
  );

  const { data: users, error: usersError } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const { data: userdata, error: userdataError } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${router.query.id}`,
    fetcher
  );

  const { data: someComments, error: someCommentsError } = useSWR(
    `https://jsonplaceholder.typicode.com/comments?postId=${router.query.id}`,
    fetcher
  );

  const { data: usersArticles, error: usersArticlesError } = useSWR(
    `https://jsonplaceholder.typicode.com/comments?postId=${router.query.id}`,
    fetcher
  );

  return {
    posts,
    users,
    post,
    user,
    userdata,
    comments,
    comment,
    someComments,
    error: postError || userError || postsError,
    isLoading:
      !post && !postError && !user && !userError && !posts && !postsError,
  };
};
