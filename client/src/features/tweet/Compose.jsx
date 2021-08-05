import {
  Avatar,
  Flex,
  Stack,
  useState,
  ImageUpload,
  ShowEmoji,
  PostInput,
  TweetButton,
  useTheme,
  Box,
  FaSmile,
  useSelector,
} from '.'

const Compose = () => {
  const [showEmojis, setShowEmojis] = useState()
  const { user } = useSelector((state) => state.auth)
  const { browserView } = useTheme()
  return (
    <>
      <Flex justifyContent="space-between" w="100%">
        <Box p={2}>
          <Avatar name={user.fullname} />
        </Box>
        <Stack w="100%" pl={4}>
          <Flex flexDir="column" w="100%">
            <PostInput />
            <Flex
              alignItems="center"
              pb={2}
              pt={8}
              pr={4}
              color="rgba(29,161,242,1.00)"
            ></Flex>
            <hr />
            <Box position="relative" w="100%">
              <Flex justifyContent="space-between" m={2}>
                <Flex pt={3} color="rgba(29,161,242,1.00)" alignItems="center">
                  <ImageUpload />
                  <FaSmile
                    className="emoji_icon"
                    onClick={() => setShowEmojis((showEmoji) => !showEmoji)}
                  />
                </Flex>
                {browserView && <TweetButton />}
              </Flex>
              {showEmojis && <ShowEmoji />}
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </>
  )
}

export default Compose
