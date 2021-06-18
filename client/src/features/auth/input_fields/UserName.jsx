import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { enteredUsername } from "../authSlice";

const UserName = () => {
  const { username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Box m={2}>
      <Input
        type='text'
        value={username}
        placeholder='Enter Username'
        onChange={(e) => dispatch(enteredUsername({ value: e.target.value }))}
      />
    </Box>
  );
};

export default UserName;
