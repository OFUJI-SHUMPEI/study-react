import Head from "next/head";
import { usePost } from "../../../hooks/usePost";
import Link from "next/link";
const Userdata = ({}) => {
  const { someComments, userdata, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head></Head>

      <h1>{userdata?.name}</h1>
      <p>{userdata?.body}</p>
      {userdata?.name ? <div>Created By{userdata?.name}</div> : null}
      <ol>
        {someComments?.map((s) => {
          return (
            <li>
              <Link href={`../../comments/${s.id}`}>
                <a>{s.body}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Userdata;
