import { Flex, Text } from "@chakra-ui/layout";
import { FaShareAlt } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Shares = ({ shareCount }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='center' w='100%'>
      <FaShareAlt color={btnColor} />
      <Text ml={2} color={btnColor}>
        {shareCount}
      </Text>
    </Flex>
  );
};

export default Shares;
