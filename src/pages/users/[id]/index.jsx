import Head from "next/head";
import { usePost } from "../../../hooks/usePost";
import Link from "next/link";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const API = `https://jsonplaceholder.typicode.com/users/${id}`;
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

const Userdata = (props) => {
  const { fallback } = props;

  const { someComments, userdata, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <SWRConfig value={{ fallback }}>
      <Head></Head>

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
export default Userdata;
