import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { Post } from "../utils/post";
import { fetchFeeds } from "./feedSlice";

const Feeds = ({ bg }) => {
  const { status, feeds, error } = useSelector((state) => state.feed);
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFeeds(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box bg={bg}>
      <Loader status={status} />
      <Error status={status} error={error} />
      {feeds.map((post) => (
        <Post post={post} key={post._id} page='feeds' />
      ))}
    </Box>
  );
};
export default Feeds;
