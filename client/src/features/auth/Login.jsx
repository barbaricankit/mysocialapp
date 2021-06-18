import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log({ token, from: state?.from });
  // useEffect(()=>{

  // })
  return (
    <>
      {!token && (
        <Flex
          justifyContent='center'
          alignItems='center'
          w='100%'
          h='100%'
          flexDir='column'>
          <NavLink to='/signin'>
            <Button m={2}>SignIn</Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button m={2}>SignUp</Button>
          </NavLink>
        </Flex>
      )}
      {token && (state?.from ? navigate(`/${state.from}`) : navigate("/feed"))}
    </>
  );
};

export default Login;
