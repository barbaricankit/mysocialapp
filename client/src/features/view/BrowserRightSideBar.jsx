import {
  useSelector,
  SearchedUserList,
  SearchBox,
  useTheme,
  Box,
  Text,
  UsersToFollow,
} from '.'

const BrowserRightSideBar = () => {
  const { secondaryColor, borderColor } = useTheme()
  const { status, searchedUserResult, searchedText } = useSelector(
    (state) => state.user,
  )
  return (
    <Box m={4}>
      <SearchBox />
      <Box
        className="right_side_bar"
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}
      >
        {!searchedText && <UsersToFollow />}
        {searchedText && searchedUserResult.length !== 0 && (
          <SearchedUserList />
        )}
        {status === 'success' && searchedText && !searchedUserResult.length && (
          <Text p={4} fontSize="large" fontStyle="italic">
            No results
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default BrowserRightSideBar
