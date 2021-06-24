import { Box } from '@chakra-ui/react';
import { BrowserNav } from '../navigation';
import { useTheme } from '.';
const BrowserLeftSideBar = () => {
	const { tabView } = useTheme();
	return (
		<Box borderRight='1px' pl={tabView ? '1rem' : '12rem'}>
			<BrowserNav />
		</Box>
	);
};

export default BrowserLeftSideBar;
