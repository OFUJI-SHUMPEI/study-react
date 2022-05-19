import Head from "next/head";
import { usePost } from "../../../hooks/usePost";

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
          return <li>{s.body}</li>;
        })}
      </ol>
    </div>
  );
};
export default Userdata;
