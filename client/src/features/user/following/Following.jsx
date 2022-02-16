import {
	UserName,
	UserAvatar,
	useParams,
	FollowButton,
	Box,
	fetchFollowing,
	FollowerFollowing,
	Error,
	Loader,
	useSelector,
	useDispatch,
	useEffect,
	Flex
} from '.';

const Following = () => {
	const { status, followings, error, user } = useSelector((state) => state.following);
	const { token } = useSelector((state) => state.auth);
	const { username } = useParams();
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (user.username !== username.split('@')[1]) {
				dispatch(fetchFollowing({ token, username }));
			}
			
		},// eslint-disable-next-line
		[ username ]
	);
	return (
		<>
			<FollowerFollowing user={user} />

			<Loader status={status} />
			<Error status={status} error={error} />
			<Box p={3}>
				{user.username === username.split('@')[1] &&
					followings?.map((user) => (
						<Flex width='100%' key={user._id} justifyContent='space-between' alignItems='center'>
							<Flex m={2} alignItems='center'>
								<UserAvatar name={user.fullname} />

								<UserName user={user} />
							</Flex>
							<FollowButton user={user} />
						</Flex>
					))}
			</Box>
		</>
	);
};

export default Following;
