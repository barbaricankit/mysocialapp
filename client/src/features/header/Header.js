import ColorModeSwitcher from "./ColorModeSwitcher";
import { Flex, Text, HStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { useTheme } from "../../localisation-context/localisation.context";

const Header = () => {
  const { onToggle, windowWidth, bodyBg } = useTheme();

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
      bg={bodyBg}
      alignItems='center'>
      <HStack>
        <Avatar
          size='sm'
          name='Ankit Singhania'
          onClick={() => windowWidth && onToggle()}
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
