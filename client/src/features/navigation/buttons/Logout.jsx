import { Text, Flex, userClickedLogOut, IoIosLogOut, useDispatch, useNavigate, useTheme } from '.';

const Logout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	const logout = () => {
		dispatch(userClickedLogOut());
		navigate('/');
	};
	return (
		<Flex alignItems='center' justifyContent='flex-start' w='100%' pt={4} onClick={() => mobileView && onToggle()}>
			<IoIosLogOut color={btnColor} fontSize='x-large' />
			{(mobileView || browserView) && (
				<Text pl={3} fontSize='larger' onClick={() => logout()}>
					Logout
				</Text>
			)}
		</Flex>
	);
};

export default Logout;
