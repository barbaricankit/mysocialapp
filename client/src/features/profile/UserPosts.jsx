import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { Post } from "../utils/post";
import { fetchPosts } from "./profileSlice";

const UserPosts = ({ bg }) => {
  const { postStatus, posts, error, postUser } = useSelector(
    (state) => state.profile
  );
  const { token } = useSelector((state) => state.auth);
  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      
      
      postUser.username !== username
    ) {
      dispatch(fetchPosts({ token, username }));
    }
    // eslint-disable-next-line
  },[username]);
  console.log({postUser,username})
  return (
    <Box bg={bg} width='100%'>
      <Loader status={postStatus} />
      <Error status={postStatus} error={error} />

      {postUser.username === username&&posts.map((post) => (
        <Post post={post} key={post._id} page='profile' />
      ))}
    </Box>
  );
};

export default UserPosts;
