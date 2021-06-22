import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import { RiChatSmileFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../utils/buttons";
import "./input_fields/input.css";
const Login = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { tabView } = useTheme();

  return (
    <>
      {!token && (
        <Flex
          justifyContent='center'
          alignItems='center'
          w='100vw'
          h='100vh'
          flexDir='column'
          bg='linear-gradient(to right, #2193b0, #6dd5ed)'>
          <Flex flexDir={tabView ? "row" : "column"}>
            <Flex flexDir='column' borderRight={tabView && "1px"} p={3}>
              <RiChatSmileFill color='white' fontSize='xxx-large' />
              <Heading>CricoTweet</Heading>
              <Text>Social Media App for cricket lovers.</Text>
            </Flex>
            <Flex flexDir='column' p={3}>
              <NavLink to='/signin'>
                <Button
                  m={2}
                  bg='white'
                  color='rgb(29, 161, 242)'
                  _hover='none'>
                  SignIn
                </Button>
              </NavLink>
              <NavLink to='/signup'>
                <Button
                  m={2}
                  bg='white'
                  color='rgb(29, 161, 242)'
                  _hover='none'>
                  SignUp
                </Button>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      )}
      {token && (state?.from ? navigate(`/${state.from}`) : navigate("/"))}
    </>
  );
};

export default Login;
