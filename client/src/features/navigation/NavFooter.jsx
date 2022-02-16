import { Text, Flex, useDispatch, useNavigate, useTheme, userClickedLogOut, IoIosLogOut } from '.';

const NavFooter = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { mobileView, btnColor, onToggle, browserView } = useTheme();
	const logout = () => {
		dispatch(userClickedLogOut());
		navigate('/');
	};
	return (
		<Flex alignItems='center' justifyContent='flex-start' w='100%' pt={5} onClick={() => mobileView && onToggle()}>
			<IoIosLogOut color={btnColor} fontSize='x-large' />
			{(mobileView || browserView) && (
				<Text pl={3} fontSize='larger' onClick={() => logout()}>
					Logout
				</Text>
			)}
		</Flex>
	);
};

export default NavFooter;
