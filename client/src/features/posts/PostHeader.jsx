import { Box, Flex, Heading, BiArrowBack, useNavigate } from '.'

const PostHeader = () => {
 
  const navigate = useNavigate()

  return (
    <Box>
      <Flex alignItems="center" p={2} pt={4} w="100%">
        <BiArrowBack fontSize="x-large" onClick={() => navigate(-1)} />
        <Heading ml={3} size="lg">
          Tweet
        </Heading>
      </Flex>
      <hr />
    </Box>
  )
}

export default PostHeader
