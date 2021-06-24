import {
	Box,
	Heading,
	useEffect,
	useDispatch,
	useSelector,
	fetchUserToFollow,
	UsersToFollowDetails,
	Loader,
	UsersToFollowHeader,
	useTheme
} from '.';

const UsersToFollow = () => {
	const { user: { status, usersToFollow }, auth: { token } } = useSelector((state) => state);
	const dispatch = useDispatch();
	const { mobileView, browserView,lgTabView } = useTheme();
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUserToFollow(token));
		}
	});

	return (
		<>
			<Loader status={status} />
			{mobileView && <UsersToFollowHeader />}
			<Box>
				{(browserView||lgTabView) && (
					<Heading size='md' m={2}>
						You might follow
					</Heading>
				)}

				{usersToFollow.map((user) => (
					<Box key={user._id}>
						<UsersToFollowDetails user={user} />
					</Box>
				))}
			</Box>
		</>
	);
};

export default UsersToFollow;
