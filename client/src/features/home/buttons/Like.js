import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegHeart } from "react-icons/fa";

const Likes = ({ likeCount, color }) => {
  return (
    <Flex alignItems='center' w='100%'>
      <FaRegHeart color={color} />
      <Text ml={2} color={color}>
        {likeCount}
      </Text>
    </Flex>
  );
};

export default Likes;
