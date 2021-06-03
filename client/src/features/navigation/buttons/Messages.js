import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegEnvelope } from "react-icons/fa";

const Messages = ({ windowWidth, color }) => {
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={color} icon={<FaRegEnvelope />} size='lg' />
      {windowWidth && <Text>Messages</Text>}
    </Flex>
  );
};

export default Messages;
