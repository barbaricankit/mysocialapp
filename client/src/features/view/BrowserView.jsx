import { Box, Grid } from '@chakra-ui/react';
import { BrowserLeftSideBar, BrowserRightSideBar, useTheme } from '.';

const BrowserView = ({ element }) => {
	const { tabView } = useTheme();
	console.log({ tabView });
	return (
		<Grid templateColumns={tabView ? '1fr 7fr' : '1fr 1.5fr 1fr'}>
			<BrowserLeftSideBar />
			<Box borderRight='1px'>{element}</Box>
			{!tabView && <BrowserRightSideBar />}
		</Grid>
	);
};

export default BrowserView;
