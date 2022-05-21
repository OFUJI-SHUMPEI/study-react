import { usePost } from "../../hooks/usePost.jsx";
import Link from "next/link";
import { API_URL } from "../../utility/const.js";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API = `${API_URL}/users/${id}`;
  const user = await fetch(API);
  const userData = await user.json();

  return {
    props: {
      fallback: {
        [API]: userData,
      },
    },
  };
};

export const Post = (props) => {
  const { fallback } = props;
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
      <SWRConfig value={{ fallback }}>
        <ol>
          {user?.name ? <div>Created By{user?.name}</div> : null}
          {someComments?.map((s) => {
            return (
              <li key={s?.id}>
                <Link href={`../../users/${post?.id}`}>
                  <a>{s?.body}</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </SWRConfig>
    </div>
  );
};
