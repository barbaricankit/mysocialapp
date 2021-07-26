import { useNavigate, BiArrowBack, Flex, Text, Box } from '.'

const FollowerFollowingHeader = ({ user }) => {
  const navigate = useNavigate()

  return (
    <Flex alignItems="center" p={2} pt={4} w="100%">
      <BiArrowBack fontSize="x-large" onClick={() => navigate(-1)} />
      <Box pl={4}>
        <Text fontWeight="500">{user.fullname}</Text>
        <Text fontWeight="300" color="">
          @{user.username}
        </Text>
      </Box>
    </Flex>
  )
}

export default FollowerFollowingHeader
