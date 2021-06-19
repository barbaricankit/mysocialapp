import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../utils";
import { getComments } from "./postSlice";
const Comment = ({ post }) => {
  const dispatch = useDispatch();
  const {
    auth: { token },
    post: { comments },
  } = useSelector((state) => state);
  useEffect(() => {
    if (post) {
      dispatch(getComments({ token, postId: post?._id }));
    }
    // eslint-disable-next-line
  }, []);
  console.log({ comments });
  return (
    <>
      {comments?.map((comment) => (
        <Post post={comment} key={post?._id} isComment />
      ))}
    </>
  );
};

export default Comment;
