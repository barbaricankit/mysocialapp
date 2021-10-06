import {
  Box,
  Text,
  useDispatch,
  useSelector,
  useEffect,
  Error,
  Loader,
  Post,
  fetchFeeds,
} from '.'

const Feeds = ({ bg }) => {
  const { status, feeds, error } = useSelector((state) => state.feed)
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
      <Error status={status} error={error} />
      {feeds.map((post) => (
        <Post post={post} key={post._id} page="feeds" />
      ))}
      {status === 'success' && feeds?.length === 0 && (
        <Text p={4} fontSize="large" fontStyle="italic">
          Please follow others to see their posts. For Follow you can go to
          Discover aur search for a particular person.
        </Text>
      )}
    </Box>
  )
}
export default Feeds
