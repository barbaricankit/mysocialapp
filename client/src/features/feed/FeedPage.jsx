import { Feeds, Box, Slide, SearchFloatingButton, ComposeFloatingButton, Navigation, useTheme, FeedHeader } from '.';

const FeedPage = () => {
	const { mobileView, isOpen, bodyBg, opaqueBg, browserView } = useTheme();
	const background = isOpen ? opaqueBg : bodyBg;

	return (
		<Box>
			{mobileView && (
				<Slide direction='left' in={isOpen} className='nav_slide'>
					<Navigation />
				</Slide>
			)}

			<Box ml={!mobileView & !browserView ? '4rem' : '0'}>
				<FeedHeader bg={background} />
				<hr />
				<Feeds bg={background} />
			</Box>
			{mobileView && <SearchFloatingButton className='search_btn_mobile_view' />}
			{mobileView && <ComposeFloatingButton />}
		</Box>
	);
};
export default FeedPage;
