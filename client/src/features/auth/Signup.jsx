import {
	Email,
	FirstName,
	LastName,
	Password,
	ReEnterPassword,
	SignUpButton,
	UserName,
	Loader,
	Error,
	useLocation,
	useNavigate,
	useSelector,
	useEffect,
	Flex,
	Box
} from '.';

const SignUp = () => {
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
			<Loader status={status} />
			<Error status={status} error={error} />
			<Flex
				flexDir='column'
				alignContent='center'
				mt='auto'
				justifyContent='center'
				alignItems='center'
				w='100vw'
				h='100vh'
				bg='linear-gradient(to right, #2193b0, #6dd5ed)'>
				<FirstName />
				<LastName />
				<Email />
				<UserName />
				<Password />
				<ReEnterPassword />
				<SignUpButton />
			</Flex>
		</Box>
	);
};

export default SignUp;
