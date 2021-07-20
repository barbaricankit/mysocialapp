import { PostDate, useTheme, Flex, Text, NavLink, Box } from '.'

const PostUser = ({ post }) => {
  const { btnColor } = useTheme()
  return (
    <Box alignItems="baseline" alignSelf="flex-start" width="100%">
      <NavLink to={`/${post.user?.username}`} state={post.user}>
        <Flex alignItems="baseline" alignSelf="flex-start" width="100%">
          <Text fontWeight="500" isTruncated>
            {post.user?.firstname + ' ' + post.user?.lastname}
            <span style={{ color: btnColor }}> @{post.user?.username}</span>
          </Text>
          <Text ml={1}>.</Text>
          <PostDate post={post} />
        </Flex>
      </NavLink>
    </Box>
  )
}
export default PostUser
