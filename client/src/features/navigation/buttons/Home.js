import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigationButtonClicked } from "../navigationSlice";
const Home = ({ windowWidth, color }) => {
  const dispatch = useDispatch();
  return (
    <NavLink to='/' exact activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        onClick={() => dispatch(navigationButtonClicked())}>
        <IconButton bg='none' color={color} icon={<FaHome />} size='lg' />
        {windowWidth && <Text>Home</Text>}
      </Flex>
    </NavLink>
  );
};

export default Home;
