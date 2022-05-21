import Head from "next/head";
import { PostsByUserId } from "../../../components/Post/PostsByUserId";

const Userdata = () => {
  return (
    <>
      <Head></Head>
      <PostsByUserId />
    </>
  );
};
export default Userdata;
