import { Flex, Heading } from "@chakra-ui/layout";
import { FaTimes } from "react-icons/fa";
import { UserDetail } from ".";
import { useTheme } from "../../theme-context/theme.context";

const NavHeader = () => {
  const { onToggle } = useTheme();

  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' h='3rem'>
        <Heading p={3} size='lg'>
          Account Info
        </Heading>
        <FaTimes onClick={onToggle} />
      </Flex>
      <hr />
      <UserDetail size={"md"} />
    </>
  );
};

export default NavHeader;
