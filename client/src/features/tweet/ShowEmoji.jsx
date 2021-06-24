import { useState, useDispatch, emojis, Flex, Text, Box, addEmojis } from '.';

const ShowEmoji = () => {
	const groups = [ 'Smileys & Emotion', 'People & Body' ];
	const dispatch = useDispatch();
	const peopleEmoji = emojis.filter((emoji) => emoji.group === groups[1]).slice(0, 150);
	const [ smiley, setSmiley ] = useState(groups[0]);

	return (
		<Box width='250px' height='200px' overflowY='scroll' bg='#D9DBF1'>
			<Flex
				justifyContent='space-evenly'
				backgroundColor='#416165'
				p={2}
				position='absolute'
				width='251px'
				top='2rem'>
				<Text onClick={() => setSmiley(() => groups[0])}>{emojis[0].char}</Text>
				<Text onClick={() => setSmiley(groups[1])}>{peopleEmoji[0].char}</Text>
			</Flex>
			<Box mt={7}>
				{smiley === groups[0] && (
					<Flex wrap='wrap' p={2}>
						{emojis.map((emoji) => {
							return emoji.group === groups[0] ? (
								<Box
									p={0.3}
									onClick={() => {
										dispatch(addEmojis({ emoji: emoji.char }));
									}}>
									{emoji.char}
								</Box>
							) : (
								''
							);
						})}
					</Flex>
				)}

				{smiley === groups[1] && (
					<Flex wrap='wrap' p={2}>
						{peopleEmoji.map((emoji) => (
							<Box p={0.3} onClick={() => dispatch(addEmojis({ emoji: emoji.char }))}>
								{emoji.char}
							</Box>
						))}
					</Flex>
				)}
			</Box>
		</Box>
	);
};

export default ShowEmoji;
