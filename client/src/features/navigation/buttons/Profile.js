import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaRegUser } from "react-icons/fa";

const Profile = ({ windowWidth, color }) => {
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={color} icon={<FaRegUser />} size='lg' />
      {windowWidth && <Text>Profile</Text>}
    </Flex>
  );
};

export default Profile;
