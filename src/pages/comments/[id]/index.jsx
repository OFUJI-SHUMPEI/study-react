import Head from "next/head";
import { usePost } from "../../../hooks/usePost";
import Link from "next/link";
import { SWRConfig } from "swr";
import { comment } from "postcss";

export const getStaticPaths = async () => {
  const COMMENTS_API = `https://jsonplaceholder.typicode.com/comments?limit=10`;
  const COMMENTS = await fetch(COMMENTS_API);
  const COMMENTSData = await COMMENTS.json();
  const paths = COMMENTSData.map((com) => ({
    params: { id: com.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API = `https://jsonplaceholder.typicode.com/comment${id}`;
  const COMMENT = await fetch(COMMENT_API);
  const COMMENTData = await COMMENT.json();

  if (!comment.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fallback: {
        [COMMENT_API]: COMMENTData,
      },
    },
  };
};

const Comment = (props) => {
  const { fallback } = props;
  const { comment, userdata, error, isLoading } = usePost();
  const router = useRouter();

  return (
    <div>
      <Head></Head>
      <div>
        <h1>{comment?.name}</h1>
        <p>{comment?.body}</p>
        <SWRConfig value={{ fallback }}>
          {comment?.name ? (
            <div>
              Created By{" "}
              <Link href={`../../users/${comment?.postId}`} prefetch={false}>
                <a>{userdata?.name}</a>
              </Link>
            </div>
          ) : null}
        </SWRConfig>
      </div>
    </div>
  );
};
export default Comment;
