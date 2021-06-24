import { Button, postNewTweet, addNewFeed, newPost, useNavigate, useDispatch, useSelector, useEffect } from '.';

const TweetButton = ({ tweet, width, padding }) => {
	const navigate = useNavigate();
	const { status, post, postText, postImage } = useSelector((state) => state.tweet);
	const { token } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const addNewPost = () => {
		if (postText) {
			dispatch(postNewTweet({ token, description: postText, attachment: postImage }));
		}
	};
	useEffect(
		() => {
			if (status === 'success') {
				dispatch(addNewFeed({ feed: post }));
				dispatch(newPost({ tweet: '' }));
				navigate('/');
			}
		},
		[ status, dispatch, tweet, post, navigate ]
	);
	return (
		<Button
			borderRadius='9999px'
			bg='rgb(29, 161, 242)'
			width={width}
			p={padding}
			// _active='none'
			// _hover='none'
			onClick={() => addNewPost()}>
			Tweet
		</Button>
	);
};

export default TweetButton;
