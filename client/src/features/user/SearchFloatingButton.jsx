import './user.css';
import { NavLink, BiSearchAlt2, Box } from '.';

const SearchFloatingButton = ({ className }) => {
	return (
		<NavLink to='/search'>
			<Box className={className}>
				<BiSearchAlt2 color='white' fontSize='x-large' />
			</Box>
		</NavLink>
	);
};

export default SearchFloatingButton;
