import {
  Box,
  PostFullDate,
  PostHeader,
  PostUserDetails,
  Reply,
  Comment,
  useSelector,
  useLocation,
  useDispatch,
  useParams,
  PostDescription,
  PostFooter,
  getPost,
  useEffect,
} from '.'

const PostPage = () => {
  const {
    feed: { feeds },
    profile: { posts },
    auth: { token },
    post: { post },
  } = useSelector((state) => state)
  const { state } = useLocation()
  const dispatch = useDispatch()
  const { id } = useParams()

  let POST =
    state?.page === 'feeds'
      ? feeds.find((feed) => feed._id === id)
      : posts.find((post) => post._id === id)

  if (!POST) {
    POST = post
  }

  useEffect(() => {
    if (!POST) {
      dispatch(getPost({ token, postId: id }))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {POST && (
        <>
          <PostHeader />
          <PostUserDetails post={POST} />
          <Box p={3} pl={4}>
            <PostDescription post={POST} size="large" />
          </Box>
          <PostFullDate post={POST} />
          <hr />
          <Box p={2}>
            <PostFooter post={POST} />
          </Box>
          <hr />
          <Reply post={POST} />
          <Comment post={POST} />{' '}
        </>
      )}
    </>
  )
}

export default PostPage
