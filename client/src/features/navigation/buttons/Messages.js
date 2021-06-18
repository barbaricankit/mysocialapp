import { Flex, Text } from "@chakra-ui/layout";
import { FaRegEnvelope } from "react-icons/fa";
import { useTheme } from "../../../theme-context/theme.context";

const Messages = () => {
  const { mobileView, btnColor, onToggle, tabView } = useTheme();
  return (
    <Flex
      alignItems='center'
      justifyContent='flex-start'
      w='100%'
      pt={4}
      onClick={() => mobileView && onToggle()}>
      <FaRegEnvelope color={btnColor} fontSize='x-large' />
      {(mobileView || tabView) && (
        <Text pl={3} fontSize='larger'>
          Messages
        </Text>
      )}
    </Flex>
  );
};

export default Messages;
