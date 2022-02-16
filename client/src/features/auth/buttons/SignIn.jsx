import { fetchSignInCall, useSelector, useDispatch, Button } from '.';

const SignInButton = () => {
	const { username, password } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<Button
			m={2}
			bg='white'
			color='rgb(29, 161, 242)'
			_hover='none'
			disabled={username && password ? false : true}
			onClick={() => dispatch(fetchSignInCall({ username, password }))}>
			Sign In
		</Button>
	);
};

export default SignInButton;
