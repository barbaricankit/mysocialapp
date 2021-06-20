import { Flex, Text } from "@chakra-ui/layout";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../theme-context/theme.context";

const BookMarks = () => {
  const { mobileView, btnColor, onToggle, tabView } = useTheme();
  const { user } = useSelector((state) => state.auth);
  return (
    <NavLink
      to={`/${user.username}/bookmarks`}
      activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        pt={4}
        onClick={() => mobileView && onToggle()}>
        <FaRegBookmark color={btnColor} fontSize='x-large' />
        {(mobileView || tabView) && (
          <Text pl={3} fontSize='larger'>
            BookMarks
          </Text>
        )}
      </Flex>
    </NavLink>
  );
};

export default BookMarks;
