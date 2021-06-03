import { Flex, Text } from "@chakra-ui/layout";

const FollowersAndFollowing = ({ color }) => {
  return (
    <Flex alignItems='center' w='100%' mt={4}>
      <Flex pl={4} alignItems='center'>
        <Text fontWeight='500'>74</Text>
        <Text fontWeight='400' color={color} fontSize='md' ml={1}>
          Following
        </Text>
      </Flex>
      <Flex pl={4} alignItems='center'>
        <Text fontWeight='500'>13</Text>
        <Text fontWeight='400' color={color} fontSize='md' ml={1}>
          Followers
        </Text>
      </Flex>
    </Flex>
  );
};

export default FollowersAndFollowing;
