import { Flex, UserAvatar, UserName } from '.';

const PostUserDetails = ({ post }) => {
	return (
		<Flex m={2} alignItems='center'>
			<UserAvatar name={post?.user?.fullname} />
			<UserName user={post?.user} />
		</Flex>
	);
};
export default PostUserDetails;

