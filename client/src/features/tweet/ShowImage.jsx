import { deleteImage, Error, Loader, useSelector, useDispatch, Box, Image, FaTimesCircle } from '.';

const ShowImage = () => {
	const { postImage, uploadStatus } = useSelector((state) => state.tweet);
	const dispatch = useDispatch();

	return (
		<>
			<Loader status={uploadStatus} />
			<Error status={uploadStatus} />
			{postImage && (
				<Box position='relative'>
					<Image src={postImage.secure_url} alt={postImage.original_filename} />
					<FaTimesCircle color='black' className='delete_img' onClick={() => dispatch(deleteImage())} />
				</Box>
			)}
		</>
	);
};

export default ShowImage;
