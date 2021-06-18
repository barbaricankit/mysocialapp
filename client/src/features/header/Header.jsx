import ColorModeSwitcher from "./ColorModeSwitcher";
import { Flex, Text, HStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { useTheme } from "../../theme-context/theme.context";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

const Header = ({ bg }) => {
  const { onToggle, mobileView, userProfileRef } = useTheme();
  const { user } = useSelector((state) => state.auth);
  console.log({ bg });
  return (
    <Box position='sticky' top='0' zIndex={1}>
      <Flex
        justifyContent='space-between'
        p={2}
        pl={3}
        mt={0}
        h='3.5rem'
        w='100%'
        bg={bg}
        alignItems='center'>
        <HStack>
          <Avatar
            ref={userProfileRef}
            size='sm'
            name={user.firstname + " " + user.lastname}
            onClick={() => mobileView && onToggle()}
          />
          <Text fontWeight='1000' fontSize='xl' pl={3}>
            Home
          </Text>
        </HStack>
        <ColorModeSwitcher />
      </Flex>
      <hr />
    </Box>
  );
};
export default Header;
