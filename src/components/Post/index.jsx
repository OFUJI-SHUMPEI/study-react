import { usePost } from "../../hooks/usePost.jsx";

export const Post = () => {
  const { post, user, someComments, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <ol>
        {user?.name ? <div>Created By{user?.name}</div> : null}
        {someComments?.map((s) => {
          return <li>{s.body}</li>;
        })}
      </ol>
    </div>
  );
};
