import React from 'react';
import './App.css';
import { useTheme } from './features';
import { Box, useColorModeValue } from '@chakra-ui/react';
import MobileView from './features/view/MobileView';
import { BrowserMainPage } from './features/view';

function App() {
	const { mobileView, browserView, tabView, lgTabView } = useTheme();
	const bg = useColorModeValue('light', 'rgba(0,0,0,1.00)');

	return (
		<Box className='App' bg={bg}>
			{mobileView && <MobileView />}
			{(browserView || tabView || lgTabView) && <BrowserMainPage />}
		</Box>
	);
}

export default App;
