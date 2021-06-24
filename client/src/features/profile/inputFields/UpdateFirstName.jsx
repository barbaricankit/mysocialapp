import { updateFirstname, FormControl, FormLabel, Input, useDispatch, useSelector } from '.';

const UpdateFirstName = () => {
	const { profile: { firstname } } = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<FormControl>
			<FormLabel>First name</FormLabel>
			<Input
				placeholder='First name'
				value={firstname}
				onChange={(e) => dispatch(updateFirstname({ firstname: e.target.value }))}
			/>
		</FormControl>
	);
};

export default UpdateFirstName;
