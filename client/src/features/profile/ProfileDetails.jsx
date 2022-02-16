import {
  Flex,
  Box,
  Button,
  useDisclosure,
  UserDetails,
  UserAvatar,
  useSelector,
  FollowButton,
  EditProfileModal,
  FollowersAndFollowing,
  UserName,
} from '.'

const ProfileDetails = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { user: loginedUser } = useSelector((state) => state.auth)

  return (
    <Box>
      <Flex
        alignItems="center"
        p={3}
        pt={4}
        w="100%"
        justifyContent="space-between"
      >
        <Box>
          <UserAvatar name={user?.fullname} size="lg" />
        </Box>
        {loginedUser?._id === user?._id ? (
          <Button bg="rgb(29, 161, 242)" onClick={onOpen}>
            Edit Profile
          </Button>
        ) : (
          <FollowButton user={user} />
        )}
      </Flex>

      <Box>
        <UserName size={'lg'} user={user} />
      </Box>
      <UserDetails user={user} />
      <Box p={2} pl={4}>
        <FollowersAndFollowing user={user} />
      </Box>
      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ProfileDetails
