import { usePost } from "../../hooks/usePost";
import Link from "next/link";
import { SWRConfig } from "swr";

export const getStaticProps = async (ctx) => {
  const COMMENTS_API = `https://jsonplaceholder.typicode.com/comments`;
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

const Comments = (props) => {
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

export default Comments;
