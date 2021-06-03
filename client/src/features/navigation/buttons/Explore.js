import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaHashtag } from "react-icons/fa";

const Explore = ({ windowWidth, color }) => {
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={color} icon={<FaHashtag />} size='lg' />
      {windowWidth && <Text>Explore</Text>}
    </Flex>
  );
};

export default Explore;
