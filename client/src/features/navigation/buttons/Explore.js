import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaHashtag } from "react-icons/fa";
import { useTheme } from "../../../localisation-context/localisation.context";

const Explore = () => {
  const { windowWidth, btnColor } = useTheme();
  return (
    <Flex alignItems='center' justifyContent='flex-start' w='100%'>
      <IconButton bg='none' color={btnColor} icon={<FaHashtag />} size='lg' />
      {windowWidth && <Text>Explore</Text>}
    </Flex>
  );
};

export default Explore;
