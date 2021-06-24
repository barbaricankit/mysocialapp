import {
	Box,
	Input,
	useCallback,
	useState,
	BiSearchAlt2,
	debounce,
	getSearchedUsers,
	useDispatch,
	useSelector
} from '.';

const SearchBox = () => {
	const { auth: { token } } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [ state, setState ] = useState('');
	const callApi = (value) => dispatch(getSearchedUsers({ value, token }));
	// eslint-disable-next-line
	const debounceCall = useCallback(debounce((value) => callApi(value), 1000), []);

	const findUsers = (value) => {
		setState(value);
		debounceCall(value);
	};
	return (
		<>
			<Box position='relative' m={4}>
				<Input
					placeholder='Find your friends'
					pr={2}
					borderRadius='10rem'
					value={state}
					onChange={(e) => findUsers(e.target.value)}
				/>
				<BiSearchAlt2
					style={{
						position: 'absolute',
						right: '0.5rem',
						top: '0.6rem',
						fontSize: 'x-large'
					}}
				/>
			</Box>
		</>
	);
};

export default SearchBox;
