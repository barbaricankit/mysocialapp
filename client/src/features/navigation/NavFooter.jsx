import { Text, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme-context/theme.context";
import { userClickedLogOut } from "../auth/authSlice";
import { IoIosLogOut } from "react-icons/io";
const NavFooter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mobileView, btnColor, onToggle, tabView } = useTheme();
  const logout = () => {
    dispatch(userClickedLogOut());
    navigate("/");
  };
  return (
    <>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        pt={5}
        onClick={() => mobileView && onToggle()}>
        <IoIosLogOut color={btnColor} fontSize='x-large' />
        {(mobileView || tabView) && (
          <Text pl={3} fontSize='larger' onClick={() => logout()}>
            Logout
          </Text>
        )}
      </Flex>
    </>
  );
};

export default NavFooter;
