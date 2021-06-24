import { enteredLastname, Input, Box, useSelector, useDispatch } from '.';

const LastName = () => {
	const { lastname } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<Box m={2}>
			<Input
				type='text'
				value={lastname}
				placeholder='Lastname'
        _placeholder={{color:"rgb(29, 161, 242)"}}
				bg='white'
        fontSize="large"
				onChange={(e) => dispatch(enteredLastname({ value: e.target.value }))}
			/>
		</Box>
	);
};

export default LastName;
