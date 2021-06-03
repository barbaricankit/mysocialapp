import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";

import { Comments, Likes, Retweets, Shares } from "./buttons";
import { posts } from "./postdata";

const Posts = ({ bg }) => {
  const color = useColorModeValue("rgb(91, 112, 131)", "rgb(136, 153, 166)");
  return (
    <Box bg={bg}>
      {posts.map((post) => (
        <>
          <Flex w='100%' pl={3} mb={3} pt={2}>
            <Avatar name={post.fullname} m={2} mt={0} />
            <VStack w='100%' pl={1.5} pr={2}>
              <Flex
                alignItems='center'
                alignSelf='flex-start'
                justifyContent='space-between'>
                <Text fontWeight='500'>{post.fullname}</Text>
                <Text fontWeight='300' color={color} ml={1}>
                  {post.userName}
                </Text>
                <Text ml={1}>.</Text>
                <Text ml={1} fontWeight='200' color={color}>
                  2h
                </Text>
              </Flex>
              <Text alignSelf='flex-start' mt={0} fontSize='sm'>
                {post.description}
              </Text>
              <Flex justifyContent='space-between' w='100%' alignItems='center'>
                <Comments commentCount={post.comments} color={color} />
                <Retweets retweetCount={post.retweet} color={color} />
                <Likes likeCount={post.likes} color={color} />
                <Shares shareCount={post.share} color={color} />
              </Flex>
            </VStack>
          </Flex>
          <hr />
        </>
      ))}
    </Box>
  );
};
export default Posts;
