import { Flex, Text } from "@chakra-ui/layout";
import { FaRegComment } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Comments = ({ commentCount }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='center' w='100%'>
      <FaRegComment color={btnColor} />
      <Text ml={2} color={btnColor}>
        {commentCount}
      </Text>
    </Flex>
  );
};

export default Comments;
