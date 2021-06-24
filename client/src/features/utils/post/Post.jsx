import { PostUser, PostFooter, PostDescription, UserAvatar, Box, Flex, VStack, NavLink, useParams } from '.';

const Post = ({ post, isComment, page }) => {
	const { username } = useParams();
	return (
		<Box key={post?._id}>
			<Flex w='100%' p={3} mb={3}>
				<UserAvatar name={post?.user?.fullname} />
				<VStack w='100%' pl={1.5} pr={2}>
					<PostUser post={post} />

					{!isComment && (
						<NavLink
							style={{ alignSelf: 'flex-start' }}
							to={`/${post?.user?.username}/status/${post._id}`}
							state={{ path: username, page }}>
							<PostDescription post={post} size='sm' />
						</NavLink>
					)}
					{isComment && <PostDescription post={post} size='sm' />}
					<PostFooter post={post} isComment={isComment} page={page} />
				</VStack>
			</Flex>
			<hr />
		</Box>
	);
};
export default Post;
