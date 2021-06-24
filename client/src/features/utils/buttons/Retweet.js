import { useTheme, Flex, Text, AiOutlineRetweet } from '.';

const Retweets = ({ retweetCount }) => {
	const { btnColor } = useTheme();
	return (
		<Flex alignItems='center' w='100%'>
			<AiOutlineRetweet color={btnColor} />
			<Text ml={2} color={btnColor}>
				{retweetCount}
			</Text>
		</Flex>
	);
};

export default Retweets;
