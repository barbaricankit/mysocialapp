import { Flex, Heading } from "@chakra-ui/layout";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { navigationButtonClicked } from "./navigationSlice";

const NavHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' h='3rem'>
        <Heading p={2} size='lg'>
          Account Info
        </Heading>
        <FaTimes onClick={() => dispatch(navigationButtonClicked())} />
      </Flex>
    </>
  );
};

export default NavHeader;
