import { updateEmail, FormControl, FormLabel, Input, useDispatch, useSelector } from '.';

const UpdateEmail = () => {
	const { profile: { email } } = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<FormControl>
			<FormLabel>Email</FormLabel>
			<Input
				placeholder='Email'
				value={email}
				onChange={(e) => dispatch(updateEmail({ email: e.target.value }))}
			/>
		</FormControl>
	);
};

export default UpdateEmail;
