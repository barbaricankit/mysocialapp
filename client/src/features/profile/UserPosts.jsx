import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { Post } from "../utils/post";
import { fetchPosts } from "./profileSlice";

const UserPosts = ({ bg }) => {
  const { postStatus, posts, error } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (postStatus === "idle" && posts.length === 0) {
      dispatch(fetchPosts(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box bg={bg} width='100%'>
      <Loader status={postStatus} />
      <Error status={postStatus} error={error} />

      {posts.map((post) => (
        <Post post={post} key={post._id} page='profile' />
      ))}
    </Box>
  );
};

export default UserPosts;
