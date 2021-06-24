import { useEffect, useSelector, useDispatch, getComments, Post, Box } from '.';

const Comment = ({ post }) => {
	const dispatch = useDispatch();
	const { auth: { token }, post: { comments } } = useSelector((state) => state);
	useEffect(() => {
		if (post) {
			dispatch(getComments({ token ,postId: post?._id}));
		}
		// eslint-disable-next-line
	}, []);

	return(
  <Box>
    {comments?.map((comment) => 
      <Post post={comment} key={comment?._id} isComment />)}
  </Box>)
};

export default Comment;
