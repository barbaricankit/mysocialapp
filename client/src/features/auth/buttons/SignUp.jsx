import { Button } from "@chakra-ui/button";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignUpCall } from "../authSlice";
import { Text } from "@chakra-ui/layout";

const SignUpButton = () => {
  const { firstname, lastname, username, password, email, reEnterPassword } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const verifyPasswords = () => {
    if (password && reEnterPassword) {
      if (password !== reEnterPassword) {
        return true;
      }
      return false;
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
      return false;
    }
    return true;
  };
  const signUp = () => {
    !verifyPasswords() &&
      dispatch(
        fetchSignUpCall({ firstname, lastname, username, password, email })
      );
  };
  return (
    <>
      {verifyPasswords() && (
        <Text className='red_color' m={2}>
          The passwords do not match
        </Text>
      )}

      <Button
        disabled={isFieldEmpty()}
        onClick={() => signUp()}
        m={2}
        bg='white'
        color='rgb(29, 161, 242)'
        _hover='none'>
        SignUp
      </Button>
    </>
  );
};

export default SignUpButton;
