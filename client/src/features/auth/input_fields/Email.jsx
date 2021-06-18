import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { enteredEmail } from "../authSlice";

const Email = () => {
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Box m={2}>
      <Input
        type='email'
        value={email}
        placeholder='Enter Email'
        onChange={(e) => dispatch(enteredEmail({ value: e.target.value }))}
      />
    </Box>
  );
};

export default Email;
