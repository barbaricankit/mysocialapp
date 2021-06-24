import {
	Box,
	Flex,
	Password,
	SignInButton,
	UserName,
	Loader,
	Error,
	useLocation,
	useNavigate,
	useSelector,
	useEffect
} from '.';

const SignIn = () => {
	const { status, error } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const navigateTo = useLocation();

	useEffect(
		() => {
			if (status === 'success') {
        navigateTo.state?.from
        ? navigate(`/${navigateTo.state.from}`)
        : navigate("/");
			}
		},
		[ status, navigateTo, navigate ]
	);
	return (
		<Box>
			<Error status={status} error={error} />
			<Loader status={status} />
			<Flex
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				w='100vw'
				h='100vh'
				bg='linear-gradient(to right, #2193b0, #6dd5ed)'>
				<UserName />
				<Password />
				<SignInButton />
			</Flex>
		</Box>
	);
};

export default SignIn;
