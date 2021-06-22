import { Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { Password, SignInButton, UserName, Loader, Error } from ".";

const SignIn = () => {
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const navigateTo = useLocation();
  console.log({ navigateTo });
  useEffect(() => {
    if (status === "success") {
      navigateTo.state?.from
        ? navigate(`/${navigateTo.state.from}`)
        : navigate("/");
    }
  }, [status, navigateTo, navigate]);
  return (
    <>
      <Error status={status} error={error} />
      <Loader status={status} />
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        w='100vw'
        h='100vh'
        bg='linear-gradient(to right, #2193b0, #6dd5ed)'>
        <UserName />
        <Password />
        <SignInButton />
      </Flex>
    </>
  );
};

export default SignIn;
