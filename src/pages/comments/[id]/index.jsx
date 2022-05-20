import Head from "next/head";
import { usePost } from "../../../hooks/usePost";
import Link from "next/link";

const Comment = () => {
  const { comment, userdata, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head></Head>
      <div>
        <h1>{comment?.name}</h1>
        <p>{comment?.body}</p>
        {comment?.name ? (
          <div>
            Created By{" "}
            <Link href={`../../users/${comment?.postId}`}>
              <a>{userdata?.name}</a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Comment;
