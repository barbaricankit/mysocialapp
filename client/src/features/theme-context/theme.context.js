import { useColorModeValue } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { useMediaQuery } from '@chakra-ui/media-query';
import { createContext, useContext, useRef } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	let [ mobileView, browserView ] = useMediaQuery([ '(max-width:500px)', '(min-width:1200px)' ]);
	let [ tabView, lgTabView ] = useMediaQuery([ '(max-width:1000px)', '(max-width:1199px)' ]);

	if (mobileView) {
		tabView = false;
		lgTabView = false;
	}
	if (tabView) {
		lgTabView = false;
	}

	const navRef = useRef(null);
	const userProfileRef = useRef(null);
	const { isOpen, onToggle, onClose } = useDisclosure();
	const bodyBg = useColorModeValue('white', 'rgba(0,0,0,1.00)');
	const opaqueBg = useColorModeValue('#999', 'rgb(52 64 78)');
	const btnColor = useColorModeValue('rgb(91, 112, 131)', 'rgb(136, 153, 166)');
	const borderColor = useColorModeValue('rgb(235, 238, 240)', 'rgb(47, 51, 54)');
	const secondaryColor = useColorModeValue('rgb(247, 249, 250)', 'rgb(21, 24, 28)');
	return (
		<ThemeContext.Provider
			value={{
				navRef,
				userProfileRef,
				mobileView,
				browserView,
				isOpen,
				onToggle,
				bodyBg,
				btnColor,
				opaqueBg,
				tabView,
				lgTabView,
				onClose,
				borderColor,
				secondaryColor
			}}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
