import { UserDetail, NavDetails, NavHeader, TweetButton, Box, Flex, useTheme, useEffect } from '.';

const Navigation = () => {
	const { mobileView, browserView, bodyBg, onToggle, onClose, isOpen, navRef, userProfileRef } = useTheme();

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
		<Box pos='sticky' top='0' zIndex={3}>
			<Flex flexDir='column' ref={navRef} w={navWidth()} bg={bodyBg} minH='100vh'>
				{mobileView && <NavHeader />}

				<NavDetails />
				{browserView && <TweetButton />}
				{browserView && <UserDetail />}
			</Flex>
		</Box>
	);
};

export default Navigation;
