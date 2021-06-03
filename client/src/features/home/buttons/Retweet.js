import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { AiOutlineRetweet } from "react-icons/ai";

const Retweets = ({ retweetCount, color }) => {
  return (
    <Flex alignItems='center' w='100%'>
      <AiOutlineRetweet color={color} />
      <Text ml={2} color={color}>
        {retweetCount}
      </Text>
    </Flex>
  );
};

export default Retweets;
