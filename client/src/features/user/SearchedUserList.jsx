import { UsersToFollowDetails, Loader, useSelector, Box } from '.';

const SearchedUserList = () => {
	const { user: { status, searchedUserResult } } = useSelector((state) => state);

	return (
		<>
			<Loader status={status} />
			<Box>
				{searchedUserResult?.map((user) => (
					<Box key={user._id}>
						<UsersToFollowDetails user={user} />
					</Box>
				))}
			</Box>
		</>
	);
};

export default SearchedUserList;
