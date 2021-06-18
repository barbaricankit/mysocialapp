import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { enteredLastname } from "../authSlice";

const LastName = () => {
  const { lastname } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Box m={2}>
      <Input
        type='text'
        value={lastname}
        placeholder='Enter Lastname'
        onChange={(e) => dispatch(enteredLastname({ value: e.target.value }))}
      />
    </Box>
  );
};

export default LastName;
