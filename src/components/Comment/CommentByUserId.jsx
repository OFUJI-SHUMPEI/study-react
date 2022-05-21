import Head from "next/head";
import Link from "next/link";
import { SWRConfig } from "swr";
import { usePost } from "../../hooks/usePost";
import { API_URL } from "../../utility/const";

export const getStaticPaths = async () => {
  const COMMENTS_API = `${API_URL}/comments?_limit=10`;
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
  const COMMENT_API = `${API_URL}/comment${id}`;
  const COMMENT = await fetch(COMMENT_API);
  const COMMENTData = await COMMENT.json();

  /*if (!COMMENTData.ok) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }*/

  return {
    props: {
      fallback: {
        [COMMENT_API]: COMMENTData,
      },
    },
    revalidate: 1,
  };
};

export const CommentByUserId = (props) => {
  const { fallback } = props;
  const { comment, userdata } = usePost();

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
