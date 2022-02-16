import {
  Box,
  Button,
  useToast,
  useDispatch,
  useSelector,
  updateUserFollowing,
  postFollowedUser,
} from '.'

const FollowButton = ({ user: followUser }) => {
  const { token, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const toast = useToast()

  const isFollowing = () => user.following.find((id) => id === followUser?._id)
  const searchedUser = user?._id === followUser?._id
  const followedUser = (followId) => {
    dispatch(postFollowedUser({ followId, token }))
    dispatch(updateUserFollowing({ followId }))
    toast({
      position: 'bottom-left',
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          You {isFollowing() ? 'unfollowed' : 'followed'} @{followUser.username}
        </Box>
      ),
    })
  }
  return (
    !searchedUser && (
      <Button
        m={2}
        bg="rgb(29, 161, 242)"
        onClick={() => followedUser(followUser._id)}
      >
        {isFollowing() ? 'Following' : 'Follow'}
      </Button>
    )
  )
}

export default FollowButton
