import { Flex, Heading } from "@chakra-ui/layout";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "../../localisation-context/localisation.context";

const NavHeader = () => {
  const { onToggle } = useTheme();

  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' h='3rem'>
        <Heading p={2} size='lg'>
          Account Info
        </Heading>
        <FaTimes onClick={onToggle} />
      </Flex>
    </>
  );
};

export default NavHeader;
