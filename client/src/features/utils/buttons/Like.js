import {
  FaRegHeart,
  likeComment,
  likePost,
  userLikedFeedPost,
  userLikedComment,
  userLikedProfilePost,
  useTheme,
  useDispatch,
  useSelector,
  Flex,
  Text,
} from '.'

const Likes = ({ post, isComment, page }) => {
  const { btnColor } = useTheme()
  const { token, user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const postLike = async () => {
    if (isComment) {
      dispatch(userLikedComment({ commentId: post._id, userId: user._id }))
      await likeComment({ token, commentId: post._id })
    } else {
      dispatch(userLikedFeedPost({ postId: post._id, userId: user._id }))
      dispatch(userLikedProfilePost({ postId: post._id, userId: user._id }))
      await likePost({ token, postId: post._id })
    }
  }
  const hasUserLikedPost = post?.likes?.find((id) => id === user._id)

  return (
    <Flex alignItems="center" w="100%" onClick={() => postLike()}>
      <FaRegHeart color={hasUserLikedPost ? 'rgb(29, 161, 242)' : btnColor} />
      <Text ml={2} color={btnColor}>
        {post?.likes?.length ? post?.likes?.length : null}
      </Text>
    </Flex>
  )
}

export default Likes
