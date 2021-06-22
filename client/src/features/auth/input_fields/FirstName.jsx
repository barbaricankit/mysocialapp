import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { enteredFirstname } from "../authSlice";

const FirstName = () => {
  const { firstname } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Box m={2}>
      <Input
        type='text'
        value={firstname}
        placeholder='Firstname'
        bg='white'
        color='black'
        onChange={(e) => dispatch(enteredFirstname({ value: e.target.value }))}
      />
    </Box>
  );
};

export default FirstName;
