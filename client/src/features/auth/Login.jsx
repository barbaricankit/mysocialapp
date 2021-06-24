import {
	Button,
	Flex,
	Heading,
	Text,
	Box,
	RiChatSmileFill,
	useSelector,
	NavLink,
	useNavigate,
	useLocation,
	useTheme
} from '.';

const Login = () => {
	const { token } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const { state } = useLocation();
	const { browserView } = useTheme();

	return (
		<Box>
			{!token && (
				<Flex
					justifyContent='center'
					alignItems='center'
					w='100vw'
					h='100vh'
					flexDir='column'
					bg='linear-gradient(to right, #2193b0, #6dd5ed)'>
					<Flex flexDir={browserView ? 'row' : 'column'}>
						<Flex flexDir='column' borderRight={browserView && '1px'} p={3}>
							<RiChatSmileFill color='white' fontSize='xxx-large' />
							<Heading>CricoTweet</Heading>
							<Text>Social Media App for cricket lovers.</Text>
						</Flex>
						<Flex flexDir='column' p={3}>
							<NavLink to='/signin'>
								<Button bg="white" color="rgb(29, 161, 242)" m={2} _hover='none'>
									SignIn
								</Button>
							</NavLink>

							<NavLink to='/signup'>
								<Button bg="white" color="rgb(29, 161, 242)" m={2} _hover='none'>
									SignUp
								</Button>
							</NavLink>
						</Flex>
					</Flex>
				</Flex>
			)}
      {token && (state?.from ? navigate(`/${state.from}`) : navigate("/"))}
		</Box>
	);
};

export default Login;
