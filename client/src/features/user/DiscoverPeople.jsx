import {
  Box,
  useEffect,
  useDispatch,
  useSelector,
  fetchUserToFollow,
  UsersToFollowDetails,
  Loader,
  UsersToFollowHeader,
  Text,
} from '.'

const DiscoverPeople = () => {
  const {
    user: { status, usersToFollow },
    auth: { token },
  } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserToFollow(token))
    }
  })

  return (
    <>
      <Loader status={status} />
      <UsersToFollowHeader />
      <Box>
        {usersToFollow.map((user) => (
          <Box key={user._id}>
            <UsersToFollowDetails user={user} />
          </Box>
        ))}
        {status === 'success' && !usersToFollow?.length && (
          <Text p={4} fontSize="large" fontStyle="italic">
            No users to follow
          </Text>
        )}
      </Box>
    </>
  )
}

export default DiscoverPeople
