import { Button, NavLink, useDispatch, fetchSignInCall } from '.'

const GuestLogin = () => {
  const dispatch = useDispatch()

  return (
    <NavLink to="/">
      <Button
        bg="white"
        color="rgb(29, 161, 242)"
        m={2}
        _hover="none"
        onClick={() =>
          dispatch(
            fetchSignInCall({ username: 'asinghania', password: 'Pwcwelcome' }),
          )
        }
      >
        SignIn as Guest
      </Button>
    </NavLink>
  )
}

export default GuestLogin
