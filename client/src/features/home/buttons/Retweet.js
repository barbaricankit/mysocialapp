import { Flex, Text } from "@chakra-ui/layout";
import { AiOutlineRetweet } from "react-icons/ai";
import { useTheme } from "../../../localisation-context/localisation.context";

const Retweets = ({ retweetCount }) => {
  const { btnColor } = useTheme();
  return (
    <Flex alignItems='center' w='100%'>
      <AiOutlineRetweet color={btnColor} />
      <Text ml={2} color={btnColor}>
        {retweetCount}
      </Text>
    </Flex>
  );
};

export default Retweets;
