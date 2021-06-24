import { enteredUsername, Input, Box, useSelector, useDispatch } from '.';
import "./input.css"
const UserName = () => {
	const { username } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<Box m={2}>
			<Input
				type='text'
				value={username}
				placeholder='Username'
				_placeholder={{color:"rgb(29, 161, 242)"}}
				bg='white'
				fontSize="large"
				onChange={(e) => dispatch(enteredUsername({ value: e.target.value }))}
			/>
		</Box>
	);
};

export default UserName;
