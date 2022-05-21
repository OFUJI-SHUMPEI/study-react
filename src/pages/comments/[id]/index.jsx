import Head from "next/head";
import { CommentByUserId } from "../../../components/Comment/CommentByUserId";

const Comment = () => {
  return (
    <div>
      <Head></Head>
      <CommentByUserId />
    </div>
  );
};
export default Comment;
