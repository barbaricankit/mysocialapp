import {
  Button,
  postNewTweet,
  addNewFeed,
  newPost,
  useNavigate,
  useDispatch,
  useSelector,
  useEffect,
} from '.'

const TweetButton = ({ width, padding }) => {
  const navigate = useNavigate()
  const { status, post, postText, postImage } = useSelector(
    (state) => state.tweet,
  )
  const { token } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const addNewPost = () => {
    if (postText) {
      dispatch(
        postNewTweet({ token, description: postText, attachment: postImage }),
      )
    }
  }
  useEffect(() => {
    if (status === 'success') {
      dispatch(addNewFeed({ feed: post }))
      dispatch(newPost({ tweet: '' }))
      navigate('/')
    }
    //eslint-disable-next-line
  }, [status])
  return (
    <Button
      borderRadius="9999px"
      bg="rgb(29, 161, 242)"
      width={width}
      p={padding}
      _hover="none"
      disabled={postText ? false : true}
      onClick={() => addNewPost()}
    >
      Tweet
    </Button>
  )
}

export default TweetButton
