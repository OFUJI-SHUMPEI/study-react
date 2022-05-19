import { usePost } from "../../hooks/usePost";
import Link from "next/link";

const Comments = () => {
  const { comments, error, isLoading } = usePost();

  return (
    <ol>
      {comments?.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.name}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default Comments;
