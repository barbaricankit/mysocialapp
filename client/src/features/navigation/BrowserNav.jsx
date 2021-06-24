import { UserDetail, NavDetails, NavHeader, TweetButton, Box, useEffect, useTheme, Flex } from '.';

const BrowserNav = () => {
	const {
		mobileView,
		browserView,
		lgTabView,
		tabView,
		bodyBg,
		onToggle,
		onClose,
		isOpen,
		navRef,
		userProfileRef
	} = useTheme();

	useEffect(
		() => {
			if (mobileView && isOpen) {
				document.addEventListener('click', (e) => {
					if (
						navRef.current &&
						!navRef.current.contains(e.target) &&
						userProfileRef.current &&
						!userProfileRef.current.contains(e.target)
					) {
						onClose();
					}
				});
			}
		},
		[ mobileView, onToggle, isOpen, onClose, navRef, userProfileRef ]
	);
	const navWidth = () => {
		if (mobileView) return '80%';
		else if (browserView) {
			return '100%';
		}
		return '4rem';
	};

	return (
		<Box pos='sticky' top='0' zIndex={3} minH='100vh'>
			<Flex flexDir='column' justifyContent='space-between' h='97vh'>
				<Flex flexDir='column' ref={navRef} w={navWidth()} bg={bodyBg} p={2}>
					{mobileView && <NavHeader />}

					<NavDetails />
				</Flex>
				{browserView && <TweetButton width='9rem' padding='1rem' />}

				{(browserView || tabView || lgTabView) && <UserDetail />}
			</Flex>
		</Box>
	);
};

export default BrowserNav;
