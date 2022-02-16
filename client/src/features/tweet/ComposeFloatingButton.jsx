import './tweet.css';
import { NavLink, MdEdit, Box } from '.';

const ComposeFloatingButton = () => {
	return (
		<NavLink to='/compose/tweet'>
			<Box className='compose_btn'>
				<MdEdit color='white' fontSize='x-large' />
			</Box>
		</NavLink>
	);
};

export default ComposeFloatingButton;
