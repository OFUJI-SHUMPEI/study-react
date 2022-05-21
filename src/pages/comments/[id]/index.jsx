import Head from "next/head";
import { usePost } from "../../../hooks/usePost";
import Link from "next/link";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const COMMENTS_API = `https://jsonplaceholder.typicode.com/comments`;
  const COMMENTS = await fetch(COMMENTS_API);
  const COMMENTSData = await user.json();

  return {
    props: {
      fallback: {
        [API]: COMMENTSData,
      },
    },
  };
};

const Comment = () => {
  const { comment, userdata, error, isLoading } = usePost();

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
