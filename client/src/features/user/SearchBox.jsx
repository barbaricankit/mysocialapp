import {
  Box,
  Input,
  useCallback,
  BiSearchAlt2,
  debounce,
  getSearchedUsers,
  userEnterSearchText,
  useDispatch,
  useSelector,
} from '.'

const SearchBox = () => {
  const { token } = useSelector((state) => state.auth)
  const { searchedText } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const callApi = (value) => dispatch(getSearchedUsers({ value, token }))
  // eslint-disable-next-line
  const debounceCall = useCallback(
    debounce((value) => callApi(value), 1000),
    [],
  )

  const findUsers = (value) => {
    dispatch(userEnterSearchText({ value }))
    debounceCall(value)
  }
  return (
    <>
      <Box position="relative" pb={4} pt={4}>
        <Input
          placeholder="Find your friends"
          mr={2}
          borderRadius="10rem"
          value={searchedText}
          onChange={(e) => findUsers(e.target.value)}
        />
        <BiSearchAlt2
          style={{
            position: 'absolute',
            right: '0.8rem',
            top: '1.4rem',
            fontSize: 'x-large',
          }}
        />
      </Box>
    </>
  )
}

export default SearchBox
