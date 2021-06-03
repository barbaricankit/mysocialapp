import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegBell } from "react-icons/fa";

const Notifications = ({ windowWidth, color }) => {
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={color} icon={<FaRegBell />} size='lg' />
      {windowWidth && <Text>Notifications</Text>}
    </Flex>
  );
};

export default Notifications;
