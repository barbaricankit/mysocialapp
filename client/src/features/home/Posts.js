import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { useTheme } from "../../localisation-context/localisation.context";

import { Comments, Likes, Retweets, Shares } from "./buttons";
import { posts } from "./postdata";

const Posts = ({ bg }) => {
  const { btnColor } = useTheme();
  return (
    <Box bg={bg}>
      {posts.map((post) => (
        <Box key={post.id}>
          <Flex w='100%' pl={3} mb={3} pt={2}>
            <Avatar name={post.fullname} m={2} mt={0} />
            <VStack w='100%' pl={1.5} pr={2}>
              <Flex
                alignItems='center'
                alignSelf='flex-start'
                justifyContent='space-between'>
                <Text fontWeight='500'>{post.fullname}</Text>
                <Text fontWeight='300' color={btnColor} ml={1}>
                  {post.userName}
                </Text>
                <Text ml={1}>.</Text>
                <Text ml={1} fontWeight='200' color={btnColor}>
                  2h
                </Text>
              </Flex>
              <Text alignSelf='flex-start' mt={0} fontSize='sm'>
                {post.description}
              </Text>
              <Flex justifyContent='space-between' w='100%' alignItems='center'>
                <Comments commentCount={post.comments} />
                <Retweets retweetCount={post.retweet} />
                <Likes likeCount={post.likes} />
                <Shares shareCount={post.share} />
              </Flex>
            </VStack>
          </Flex>
          <hr />
        </Box>
      ))}
    </Box>
  );
};
export default Posts;
