import { updateBio, FormControl, FormLabel, Textarea, useDispatch, useSelector } from '.';

const UpdateBio = () => {
	const { profile: { bio } } = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<FormControl>
			<FormLabel>Bio</FormLabel>
			<Textarea placeholder='Bio' value={bio} onChange={(e) => dispatch(updateBio({ bio: e.target.value }))} />
		</FormControl>
	);
};

export default UpdateBio;
