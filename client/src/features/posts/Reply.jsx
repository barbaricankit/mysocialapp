import {
  Avatar,
  Box,
  Button,
  Flex,
  Textarea,
  updateCommentCountInProfilePosts,
  updateCommentCountInFeeds,
  useState,
  useDispatch,
  useSelector,
  useTheme,
  postComment,
  Loader,
} from '.'

const Reply = ({ post }) => {
  const {
    auth: { user, token },
    post: { status },
  } = useSelector((state) => state)
  const { secondaryColor, borderColor } = useTheme()
  const [reply, setReply] = useState('')
  const dispatch = useDispatch()

  const replyClick = () => {
    const postId = post._id
    dispatch(postComment({ token, postId, description: reply }))
    dispatch(updateCommentCountInProfilePosts({ postId }))
    dispatch(updateCommentCountInFeeds({ postId }))

    setReply('')
  }
  return (
    <>
      <Loader status={status} />
      <Flex p={3} justifyContent="space-between">
        <Avatar name={user.fullname} />
        <Textarea
          value={reply}
          placeholder="Tweet your reply"
          outline="none"
          border="none"
          focusBorderColor="none"
          onChange={(e) => setReply(e.target.value)}
        />
        <Button
          _hover="none"
          bg="rgb(29, 161, 242)"
          disabled={reply ? false : true}
          onClick={() => replyClick()}
        >
          Reply
        </Button>
      </Flex>
      <Box
        className="horizontal_line"
        bg={secondaryColor}
        borderBottomColor={borderColor}
        borderTopColor={borderColor}
      />
    </>
  )
}

export default Reply
