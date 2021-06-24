import { useSelector, Text, Box } from '.';

const UserDetails = () => {
	const { user } = useSelector((state) => state.auth);

	return (
		<Box>
			<Text>{user.bio}</Text>
		</Box>
	);
};

export default UserDetails;
