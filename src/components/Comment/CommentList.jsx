import { usePost } from "../../hooks/usePost";
import Link from "next/link";
import { SWRConfig } from "swr";
import { API_URL } from "../../utility/const";

export const getStaticProps = async (ctx) => {
  const COMMENTS_API = `${API_URL}/comments`;
  const COMMENTS = await fetch(COMMENTS_API);
  const COMMENTSData = await COMMENTS.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API]: COMMENTSData,
      },
    },
  };
};

export const CommentList = (props) => {
  const { fallback } = props;
  const { comments } = usePost();

  return (
    <ol>
      <SWRConfig value={{ fallback }}>
        {comments?.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`/comments/${comment.id}`}>
                <a>{comment.name}</a>
              </Link>
            </li>
          );
        })}
      </SWRConfig>
    </ol>
  );
};
