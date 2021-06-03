import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegUser } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Profile = () => {
  const { windowWidth, btnColor } = useTheme();
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={btnColor} icon={<FaRegUser />} size='lg' />
      {windowWidth && <Text>Profile</Text>}
    </Flex>
  );
};

export default Profile;
