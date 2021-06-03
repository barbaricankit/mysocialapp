import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegBell } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Notifications = () => {
  const { windowWidth, btnColor } = useTheme();
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={btnColor} icon={<FaRegBell />} size='lg' />
      {windowWidth && <Text>Notifications</Text>}
    </Flex>
  );
};

export default Notifications;
