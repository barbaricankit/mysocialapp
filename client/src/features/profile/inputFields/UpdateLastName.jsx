import { updateLastname, FormControl, FormLabel, Input, useDispatch, useSelector } from '.';

const UpdateLastName = () => {
	const { profile: { lastname } } = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<FormControl>
			<FormLabel>Last name</FormLabel>
			<Input
				placeholder='Last name'
				value={lastname}
				onChange={(e) => dispatch(updateLastname({ lastname: e.target.value }))}
			/>
		</FormControl>
	);
};

export default UpdateLastName;
