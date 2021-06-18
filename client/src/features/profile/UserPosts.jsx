import { Box, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { Post } from "../utils/post";
import { fetchPosts } from "./profileSlice";

const UserPosts = ({ bg }) => {
  const { status, posts, error } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle" && posts.length === 0) {
      dispatch(fetchPosts(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box bg={bg} width='100%'>
      <Loader status={status} />
      <Error status={status} error={error} />
      <Flex justifyContent='center'>
        <Text p={2} pb={1}>
          Tweets
        </Text>
      </Flex>
      <hr />
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </Box>
  );
};

export default UserPosts;
