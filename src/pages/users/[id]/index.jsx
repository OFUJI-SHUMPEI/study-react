import Head from "next/head";
import { usePost } from "../../../hooks/usePost";

const Userdata = ({}) => {
  const { userdata, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ロード中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head></Head>
      <div>
        <h1>{userdata?.name}</h1>
        <p>{userdata?.body}</p>
        {userdata?.name ? <div>Created By{userdata?.name}</div> : null}
      </div>
    </div>
  );
};
export default Userdata;
