import Link from "next/link";

import { SWRConfig } from "swr";
import { API_URL } from "../../utility/const";
import { usePost } from "../../hooks/usePost";

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

export const PostsByUserId = (props) => {
  const { someComments, userdata, error, isLoading } = usePost();
  const { fallback } = props;

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <SWRConfig value={{ fallback }}>
      <h1>{userdata?.name}</h1>
      <p>{userdata?.body}</p>

      <h3 className="text-right">投稿</h3>

      <ol>
        {someComments?.map((s) => {
          return (
            <li className="my-2" key={s.id}>
              <Link href={`../../comments/${s.id}`}>
                <a className="font-bold">{s.body}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </SWRConfig>
  );
};
