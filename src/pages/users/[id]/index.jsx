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
      {userdata?.name ? <div>Created By{userdata?.name}</div> : null}
      <ol>
        {someComments?.map((s) => {
          return (
            <li key={s.id}>
              <Link href={`../../comments/${s.id}`}>
                <a>{s.body}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </SWRConfig>
  );
};
export default Userdata;
