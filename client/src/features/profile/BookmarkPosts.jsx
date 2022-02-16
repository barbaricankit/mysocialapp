import {
  Loader,
  Error,
  useEffect,
  Post,
  useDispatch,
  useSelector,
  fetchBookmarkPosts,
  Text,
} from '.'

const BookmarkPosts = () => {
  const {
    auth: { token },
    profile: { bookMarkStatus, bookmarkPost, error },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (bookMarkStatus === 'idle') {
      dispatch(fetchBookmarkPosts(token))
    }
  })
  return (
    <>
      <Loader status={bookMarkStatus} />
      <Error status={bookMarkStatus} error={error} />
      {bookmarkPost?.map((post) => (
        <Post post={post} key={post._id} page="profile" />
      ))}
      {bookMarkStatus === 'success' && bookmarkPost.length === 0 && (
        <Text p={4} fontSize="large" fontStyle="italic">
          No bookmarked posts
        </Text>
      )}
    </>
  )
}

export default BookmarkPosts
