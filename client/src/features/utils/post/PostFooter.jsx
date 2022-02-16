import { Comments, Likes, Bookmark, Flex } from '.';

const PostFooter = ({ post, isComment, page }) => {
	return (
		<Flex justifyContent='space-evenly' w='100%' alignItems='center' ml={4}>
			<Comments post={post} page={page} />			
			<Likes post={post} isComment={isComment} page={page} />
			<Bookmark post={post} />
		</Flex>
	);
};
export default PostFooter;
