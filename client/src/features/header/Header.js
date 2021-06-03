import ColorModeSwitcher from "./ColorModeSwitcher";
import { Flex, Text, HStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { useDispatch } from "react-redux";
import { navigationButtonClicked } from "../navigation/navigationSlice";

const Header = ({ bg, windowWidth }) => {
  const dispatch = useDispatch();

  return (
    <Flex
      justifyContent='space-between'
      p={2}
      pl={3}
      mt={0}
      zIndex={2}
      position='sticky'
      top='0'
      h='3.5rem'
      w='100%'
      bg={bg}
      alignItems='center'>
      <HStack>
        <Avatar
          size='sm'
          name='Ankit Singhania'
          onClick={() => windowWidth && dispatch(navigationButtonClicked())}
        />
        <Text fontWeight='1000' fontSize='xl' pl={3}>
          Home
        </Text>
      </HStack>
      <ColorModeSwitcher />
    </Flex>
  );
};
export default Header;
