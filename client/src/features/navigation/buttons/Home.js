import { Flex, Text } from "@chakra-ui/layout";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../theme-context/theme.context";
const Home = () => {
  const { mobileView, onToggle, btnColor, tabView } = useTheme();
  return (
    <NavLink to='/' activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        pt={4}
        onClick={() => mobileView && onToggle()}>
        <FaHome color={btnColor} fontSize='x-large' />
        {(mobileView || tabView) && (
          <Text pl={3} fontSize='larger'>
            Home
          </Text>
        )}
      </Flex>
    </NavLink>
  );
};

export default Home;
