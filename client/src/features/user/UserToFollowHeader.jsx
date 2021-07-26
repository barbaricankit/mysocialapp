import { Box, Flex, Heading, BiArrowBack, useNavigate } from '.'

const UsersToFollowHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      <Flex alignItems="center" p={2} pt={4} w="100%">
        <BiArrowBack fontSize="x-large" onClick={() => navigate(-1)} />
        <Box pl={4}>
          <Heading size="md" m={2}>
            Discover People
          </Heading>
        </Box>
      </Flex>
      <hr />
    </>
  )
}

export default UsersToFollowHeader
