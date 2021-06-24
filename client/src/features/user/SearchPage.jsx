import { SearchBox, SearchedUserList, SearchHeader, Box } from '.';

const SearchPage = () => {
	return (
		<>
			<SearchHeader />
			<Box>
				<SearchBox />
				<Box>
					<SearchedUserList />
				</Box>
			</Box>
		</>
	);
};

export default SearchPage;
