import {
  Box,
  useDispatch,
  useSelector,
  useEffect,
  Error,
  Loader,
  Post,
  fetchFeeds,
} from '.'

const Feeds = ({ bg }) => {
  const {
    feed: { status, feeds, error },
    tweet: { status: tweetStatus },
  } = useSelector((state) => state)
  const { token } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFeeds(token))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Box bg={bg}>
      <Loader status={status} />
      <Loader status={tweetStatus} />
      <Error status={status} error={error} />
      {feeds.map((post) => (
        <Post post={post} key={post._id} page="feeds" />
      ))}
    </Box>
  )
}
export default Feeds
