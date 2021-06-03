import { IconButton } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../localisation-context/localisation.context";
const Home = () => {
  const { windowWidth, onToggle, btnColor } = useTheme();
  return (
    <NavLink to='/' exact activeStyle={{ fontWeight: "bold" }}>
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        w='100%'
        onClick={() => windowWidth && onToggle()}>
        <IconButton bg='none' color={btnColor} icon={<FaHome />} size='lg' />
        {windowWidth && <Text>Home</Text>}
      </Flex>
    </NavLink>
  );
};

export default Home;
