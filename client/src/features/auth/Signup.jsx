import { Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Email,
  FirstName,
  LastName,
  Password,
  ReEnterPassword,
  SignUpButton,
  UserName,
  Loader,
  Error,
} from ".";

const SignUp = () => {
  const { status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const navigateTo = useLocation();
  useEffect(() => {
    if (status === "success") {
      navigateTo.state?.from
        ? navigate(`/${navigateTo.state.from}`)
        : navigate("/feed");
    }
  }, [status, navigateTo, navigate]);
  return (
    <>
      <Loader status={status} />
      <Error status={status} error={error} />
      <Flex flexDir='column' alignContent='center' mt='auto' h='100%' w='100%'>
        <FirstName />
        <LastName />
        <Email />
        <UserName />
        <Password />
        <ReEnterPassword />
        <SignUpButton />
      </Flex>
    </>
  );
};

export default SignUp;
