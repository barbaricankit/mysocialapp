import { Flex, useTheme, Feeds, FeedHeader, AddNewTweet } from '.'

const BrowserFeed = () => {
  const { bodyBg } = useTheme()

  return (
    <Flex flexDir="column">
      <FeedHeader bg={bodyBg} />
      <AddNewTweet />
      <Feeds />
    </Flex>
  )
}

export default BrowserFeed
