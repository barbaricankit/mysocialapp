import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaShareAlt } from "react-icons/fa";

const Shares = ({ shareCount, color }) => {
  return (
    <Flex alignItems='center' w='100%'>
      <FaShareAlt color={color} />
      <Text ml={2} color={color}>
        {shareCount}
      </Text>
    </Flex>
  );
};

export default Shares;
