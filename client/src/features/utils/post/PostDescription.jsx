import { Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const PostDescription = ({ post }) => {
  return (
    <Box alignSelf='flex-start'>
      <Box>
        <Text mt={0} fontSize='sm'>
          {post.description}
        </Text>
        {post.attachment && (
          <Image
            src={post.attachment?.secure_url}
            alt={post.attachment?.original_filename}
            w='320px'
            h='240px'
            pt={2}
          />
        )}
      </Box>
    </Box>
  );
};
export default PostDescription;
