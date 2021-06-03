import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegEnvelope } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Messages = () => {
  const { windowWidth, btnColor } = useTheme();
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton
        bg='none'
        color={btnColor}
        icon={<FaRegEnvelope />}
        size='lg'
      />
      {windowWidth && <Text>Messages</Text>}
    </Flex>
  );
};

export default Messages;
