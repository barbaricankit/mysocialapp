import { Button } from "@chakra-ui/button";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignInCall } from "../authSlice";

const SignInButton = () => {
  const { username, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Button
      disabled={username && password ? false : true}
      onClick={() => dispatch(fetchSignInCall({ username, password }))}>
      Sign In
    </Button>
  );
};

export default SignInButton;
