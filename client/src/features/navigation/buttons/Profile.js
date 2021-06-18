import { Flex, Text } from "@chakra-ui/layout";
import { FaRegUser } from "react-icons/fa";
import { useTheme } from "../../../theme-context/theme.context";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const { mobileView, btnColor, onToggle, tabView } = useTheme();
  const { user } = useSelector((state) => state.auth);
  return (
    <NavLink to={`/${user.username}`} activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        pt={4}
        onClick={() => mobileView && onToggle()}>
        <FaRegUser color={btnColor} fontSize='x-large' />
        {(mobileView || tabView) && (
          <Text pl={3} fontSize='larger'>
            Profile
          </Text>
        )}
      </Flex>
    </NavLink>
  );
};

export default Profile;
