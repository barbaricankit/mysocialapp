import { enteredFirstname, Input, Box, useSelector, useDispatch } from '.';

const FirstName = () => {
	const { firstname } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<Box m={2}>
			<Input
				type='text'
				value={firstname}
				placeholder='Firstname'
				_placeholder={{ color: 'rgb(29, 161, 242)' }}
				bg='white'
				fontSize='large'
				onChange={(e) => dispatch(enteredFirstname({ value: e.target.value }))}
			/>
		</Box>
	);
};

export default FirstName;
