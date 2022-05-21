import { useRouter } from "next/router";
import useSWR from "swr/immutable";
import { API_URL } from "../utility/const";
const fetcher = async (...args) => {
  const res = await fetch(...args);
  return await res.json();
};

export const usePost = () => {
  const router = useRouter();
  const { data: post, error: postError } = useSWR(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    post?.userId ? `${API_URL}/users/${post.userId}` : null,
    fetcher
  );

  const { data: posts, error: postsError } = useSWR(
    `${API_URL}/posts`,
    fetcher
  );

  const { data: comments, error: commentsError } = useSWR(
    `${API_URL}/comments`,
    fetcher
  );

  const { data: comment, error: commentError } = useSWR(
    `${API_URL}/comments/${router.query.id}`,
    fetcher
  );

  const { data: users, error: usersError } = useSWR(
    `${API_URL}/users`,
    fetcher
  );

  const { data: userdata, error: userdataError } = useSWR(
    `${API_URL}/users/${router.query.id}`,
    fetcher
  );

  const { data: someComments, error: someCommentsError } = useSWR(
    `${API_URL}/comments?postId=${router.query.id}`,
    fetcher
  );

  const { data: usersArticles, error: usersArticlesError } = useSWR(
    `${API_URL}/comments?postId=${router.query.id}`,
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
