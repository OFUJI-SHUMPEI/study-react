import { usePost } from "../../hooks/usePost.jsx";
import Link from "next/link";

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
          return (
            <li key={user.id}>
              <Link href={`../../users/${post.id}`}>
                <a>{s.body}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
