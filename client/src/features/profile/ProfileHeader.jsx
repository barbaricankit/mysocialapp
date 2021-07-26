import { BiArrowBack, useNavigate, Text, Box, Flex } from '.'

const ProfileHeader = ({ user, posts }) => {
  const navigate = useNavigate()

  return (
    <Flex alignItems="center" p={2} pt={4} w="100%">
      <BiArrowBack fontSize="x-large" onClick={() => navigate(-1)} />
      <Box pl={4}>
        <Text fontWeight="500">{user?.fullname}</Text>
        <Text fontWeight="300" color="">
          {posts?.length} Tweets
        </Text>
      </Box>
    </Flex>
  )
}

export default ProfileHeader
