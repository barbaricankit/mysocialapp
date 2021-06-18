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
    console.log("Sign IN ka useEffect", { status });
    if (status === "success") {
      navigateTo.state?.from
        ? navigate(`/${navigateTo.state.from}`)
        : navigate("/feed");
    }
  }, [status, navigateTo, navigate]);
  return (
    <>
      <Error status={status} error={error} />
      <Loader status={status} />
      <Flex flexDir='column' justifyItems='center' alignItems='center' m={4}>
        <UserName />
        <Password />
        <SignInButton />
      </Flex>
    </>
  );
};

export default SignIn;
