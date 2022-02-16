import { UsersToFollowDetails, Loader, useSelector, Box } from '.'

const SearchedUserList = () => {
  const { status, searchedUserResult } = useSelector((state) => state.user)

  return (
    <>
      <Loader status={status} />
      <Box>
        {searchedUserResult?.map((user) => (
          <Box key={user._id}>
            <UsersToFollowDetails user={user} />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default SearchedUserList
