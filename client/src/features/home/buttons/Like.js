import { Flex, Text } from "@chakra-ui/layout";
import { FaRegHeart } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Likes = ({ likeCount }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='center' w='100%'>
      <FaRegHeart color={btnColor} />
      <Text ml={2} color={btnColor}>
        {likeCount}
      </Text>
    </Flex>
  );
};

export default Likes;
