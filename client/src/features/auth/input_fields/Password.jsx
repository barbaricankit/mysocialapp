import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { BsFillEyeFill } from "react-icons/bs";
import { enteredPassword } from "../authSlice";
import { useState } from "react";

const Password = () => {
  const { password } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box m={2} className='input_pwd'>
      <Input
        type={showPassword ? "text" : "password"}
        value={password}
        placeholder='Password'
        bg='white'
        color='black'
        onChange={(e) => dispatch(enteredPassword({ value: e.target.value }))}
      />
      <BsFillEyeFill
        className='btn_show_pwd'
        color='rgb(29, 161, 242)'
        onClick={() => setShowPassword(!showPassword)}
      />
    </Box>
  );
};

export default Password;
