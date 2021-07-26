import { Compose, TweetHeader, useTheme, Box, Loader, useSelector } from '.'

const AddNewTweet = () => {
  const { mobileView, secondaryColor, borderColor } = useTheme()
  const { status } = useSelector((state) => state.tweet)
  return (
    <>
      {mobileView && <TweetHeader />}
      <Compose />
      {!mobileView && (
        <Box
          className="horizontal_line"
          mt={2}
          bg={secondaryColor}
          borderBottomColor={borderColor}
          borderTopColor={borderColor}
        />
      )}
      <Loader status={status} />
    </>
  )
}

export default AddNewTweet
