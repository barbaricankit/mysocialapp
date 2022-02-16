import { Text, Box ,Image,useTheme} from ".";

const PostDescription = ({ post, size }) => {
  const {mobileView}=useTheme();
  return (
    <Box alignSelf='flex-start'>
      <Box>
        <Text mt={0} fontSize={size}>
          {post?.description}
        </Text>
        {post?.attachment && (
          <Image
            src={post?.attachment?.secure_url}
            alt={post?.attachment?.original_filename}
            w={mobileView && "280px"}
            pt={2}
          />
        )}
      </Box>
    </Box>
  );
};
export default PostDescription;
