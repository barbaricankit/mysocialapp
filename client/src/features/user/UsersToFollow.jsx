import {
  Box,
  Heading,
  useEffect,
  useDispatch,
  useSelector,
  fetchUserToFollow,
  UsersToFollowDetails,
  Loader,
  UsersToFollowHeader,
  useTheme,
  Text,
} from '.'

const UsersToFollow = () => {
  const {
    user: { status, usersToFollow },
    auth: { token },
  } = useSelector((state) => state)
  const dispatch = useDispatch()
  const { mobileView, browserView, lgTabView } = useTheme()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserToFollow(token))
    }
  })

  return (
    <>
      <Loader status={status} />
      {mobileView && <UsersToFollowHeader />}
      <Box>
        {(browserView || lgTabView) && (
          <Heading size="md" m={4}>
            You might follow
          </Heading>
        )}

        {usersToFollow.map((user) => (
          <Box key={user._id}>
            <UsersToFollowDetails user={user} />
          </Box>
        ))}
        {status === 'success' && !usersToFollow && (
          <Text p={4} fontSize="large" fontStyle="italic">
            No users to follow
          </Text>
        )}
      </Box>
    </>
  )
}

export default UsersToFollow
