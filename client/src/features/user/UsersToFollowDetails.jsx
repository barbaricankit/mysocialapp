import { FollowButton, UserName, UserAvatar, Flex } from '.';

const UsersToFollowDetails = ({ user }) => {
	return (
		<>
			<hr />
			<Flex justifyContent='space-between' alignItems='center'>
				<Flex m={2} alignItems='center'>
					<UserAvatar name={user.fullname} />
					<UserName user={user} />
				</Flex>
				<FollowButton user={user} />
			</Flex>
		</>
	);
};

export default UsersToFollowDetails;
