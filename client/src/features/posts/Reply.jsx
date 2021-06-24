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
	Loader
} from '.';

const Reply = ({ post }) => {
	const { auth: { user, token } } = useSelector((state) => state);
	const { secondaryColor, borderColor } = useTheme();
	const [ reply, setReply ] = useState('');
	const dispatch = useDispatch();
	const replyClick = () => {
		const postId = post._id;
		dispatch(postComment({ token, postId, description: reply }));
		dispatch(updateCommentCountInProfilePosts({ postId }));
		dispatch(updateCommentCountInFeeds({ postId }));

		setReply('');
	};
	return (
		<>
			<Loader />
			<Flex p={3} justifyContent='space-between'>
				<Avatar name={user.fullname} />
				<Textarea
					value={reply}
					placeholder='Tweet your reply'
					outline='none'
					border='none'
					_focus='none'
					onChange={(e) => setReply(e.target.value)}
				/>
				<Button onClick={() => replyClick()}>Reply</Button>
			</Flex>
			<Box
				className='horizontal_line'
				bg={secondaryColor}
				borderBottomColor={borderColor}
				borderTopColor={borderColor}
			/>
		</>
	);
};

export default Reply;
