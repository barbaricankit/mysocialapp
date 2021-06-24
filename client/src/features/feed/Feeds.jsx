import {Box, useDispatch, useSelector ,useEffect,Error,Loader,Post,fetchFeeds } from ".";

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
