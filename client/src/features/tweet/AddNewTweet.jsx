import { Compose, TweetHeader, useTheme, Box } from '.'

const AddNewTweet = () => {
  const { mobileView, secondaryColor, borderColor } = useTheme()

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
    </>
  )
}

export default AddNewTweet
