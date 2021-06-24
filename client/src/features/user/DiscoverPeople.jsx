import {
	Box,
	useEffect,
	useDispatch,
	useSelector,
	fetchUserToFollow,
	UsersToFollowDetails,
	Loader,
	UsersToFollowHeader,
} from '.';

const DiscoverPeople = () => {
	const { user: { status, usersToFollow }, auth: { token } } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUserToFollow(token));
		}
	});

	return (
		<>
			<Loader status={status} />
			<UsersToFollowHeader />
			<Box>
				{usersToFollow.map((user) => (
					<Box key={user._id}>
						<UsersToFollowDetails user={user} />
					</Box>
				))}
			</Box>
		</>
	);
};

export default DiscoverPeople;
