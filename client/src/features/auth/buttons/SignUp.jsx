import { Button } from "@chakra-ui/button";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignUpCall } from "../authSlice";
import { Text } from "@chakra-ui/layout";
import { useState } from "react";

const SignUpButton = () => {
  const { firstname, lastname, username, password, email, reEnterPassword } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [fieldState, setFieldState] = useState("");
  const verifyPasswords = () => {
    if (password && reEnterPassword) {
      if (password !== reEnterPassword) {
        return (
          <Text className='red_color' m={2}>
            The passwords do not match
          </Text>
        );
      }
    }
  };
  const isFieldEmpty = () => {
    if (
      firstname &&
      lastname &&
      username &&
      password &&
      email &&
      reEnterPassword
    ) {
      dispatch(
        fetchSignUpCall({ firstname, lastname, username, password, email })
      );
    } else {
      setFieldState("Please fill all the fields");
    }
  };
  return (
    <>
      {verifyPasswords()}
      <Text className='red_color' m={2}>
        {fieldState}
      </Text>
      <Button m={2} onClick={() => isFieldEmpty()}>
        SignUp
      </Button>
    </>
  );
};

export default SignUpButton;
