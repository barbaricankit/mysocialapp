import {
  enteredPassword,
  Input,
  Box,
  useSelector,
  useDispatch,
  useState,
  BsFillEyeFill,
} from '.'

const Password = () => {
  const { password } = useSelector((state) => state.auth)
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  return (
    <Box m={2} className="input_pwd">
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password}
        placeholder="Password"
        _placeholder={{ color: 'rgb(29, 161, 242)' }}
        bg="white"
        fontSize="large"
        color="black"
        onChange={(e) => dispatch(enteredPassword({ value: e.target.value }))}
      />
      <BsFillEyeFill
        className="btn_show_pwd"
        color="rgb(29, 161, 242)"
        onClick={() => setShowPassword(!showPassword)}
      />
    </Box>
  )
}

export default Password
