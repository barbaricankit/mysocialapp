import {
  useEffect,
  Box,
  Text,
  fetchPosts,
  Post,
  Loader,
  Error,
  useParams,
  useDispatch,
  useSelector,
} from '.'

const UserPosts = ({ bg }) => {
  const { postStatus, posts, error, postUser } = useSelector(
    (state) => state.profile,
  )
  const { token } = useSelector((state) => state.auth)
  const { username } = useParams()
  const dispatch = useDispatch()
  useEffect(
    () => {
      if (postUser.username !== username) {
        dispatch(fetchPosts({ token, username }))
      }
    }, // eslint-disable-next-line
    [username],
  )

  return (
    <Box bg={bg} width="100%">
      <Loader status={postStatus} />
      <Error status={postStatus} error={error} />

      {postUser.username === username &&
        posts.map((post) => <Post post={post} key={post._id} page="profile" />)}
      {postStatus === 'success' && !posts?.length && (
        <Text p={4} fontSize="large" fontStyle="italic">
          No tweets yet
        </Text>
      )}
    </Box>
  )
}

export default UserPosts
