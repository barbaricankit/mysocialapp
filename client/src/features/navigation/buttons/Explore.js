import { Flex, Text } from "@chakra-ui/layout";
import { FaHashtag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../theme-context/theme.context";

const Explore = () => {
  const { mobileView, btnColor, onToggle, tabView } = useTheme();
  return (
    <NavLink to='/explorepeople' activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        pt={4}
        onClick={() => mobileView && onToggle()}>
        <FaHashtag color={btnColor} fontSize='x-large' />
        {(mobileView || tabView) && (
          <Text pl={3} fontSize='larger'>
            Explore
          </Text>
        )}
      </Flex>
    </NavLink>
  );
};

export default Explore;
