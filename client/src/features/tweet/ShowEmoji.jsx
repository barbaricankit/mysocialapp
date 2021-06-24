import { useDispatch, Flex, Box, addEmojis } from '.';
import Picker from 'emoji-picker-react';
const ShowEmoji = () => {
	const dispatch = useDispatch();

	const onEmojiClick = (event, emojiObject) => {
		dispatch(addEmojis({ emoji: emojiObject.emoji }));
	};
	return (
		<Box>
			<Flex position='absolute' top='3rem'>
				<Picker onEmojiClick={onEmojiClick} />
			</Flex>
		</Box>
	);
};

export default ShowEmoji;
