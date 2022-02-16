import { enteredEmail, Input, Box, useSelector, useDispatch } from '.'

const Email = () => {
  const { email } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <Box m={2}>
      <Input
        type="email"
        value={email}
        placeholder="Email"
        _placeholder={{ color: 'rgb(29, 161, 242)' }}
        fontSize="large"
        bg="white"
        color="black"
        onChange={(e) => dispatch(enteredEmail({ value: e.target.value }))}
      />
    </Box>
  )
}

export default Email
