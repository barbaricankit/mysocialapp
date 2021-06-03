import { Flex, Text } from "@chakra-ui/layout";
import { FaRegComment } from "react-icons/fa";

const Comments = ({ commentCount, color }) => {
  return (
    <Flex alignItems='center' w='100%'>
      <FaRegComment color={color} />
      <Text ml={2} color={color}>
        {commentCount}
      </Text>
    </Flex>
  );
};

export default Comments;
