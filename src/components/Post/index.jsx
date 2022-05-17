import { usePost } from "../../hooks/usePost.jsx";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    console.log(post);
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created By{user?.name}</div> : null}
    </div>
  );
};
