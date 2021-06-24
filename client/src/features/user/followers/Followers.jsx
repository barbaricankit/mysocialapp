import {
	UserName,
	UserAvatar,
	useParams,
	FollowButton,
	Box,
	fetchFollowers,
	FollowerFollowing,
	Error,
	Loader,
	useSelector,
	useDispatch,
	useEffect,
	Flex
} from '.';

const Followers = () => {
	const { status, followers, error, user } = useSelector((state) => state.followers);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { username } = useParams();

	useEffect(() => {
		if (user.username !== username.split('@')[1]) {
			dispatch(fetchFollowers({ token, username }));
		}
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<FollowerFollowing user={user} />

			<Loader status={status} />
			<Error status={status} error={error} />
			<Box p={3}>
				{user.username === username.split('@')[1] &&
					followers?.map((user) => (
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

export default Followers;
