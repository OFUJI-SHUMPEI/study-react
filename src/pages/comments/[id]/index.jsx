import Head from "next/head";
import { usePost } from "../../../hooks/usePost";

const Comment = ({}) => {
  const { comment, user, error, isLoading } = usePost();

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
        {comment?.name ? <div>Created By{comment?.name}</div> : null}
      </div>
    </div>
  );
};
export default Comment;
