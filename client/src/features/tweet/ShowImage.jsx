import { useColorModeValue } from '@chakra-ui/react'
import {
  deleteImage,
  Error,
  Loader,
  useSelector,
  useDispatch,
  Box,
  FaTimes,
  Text,
} from '.'

const ShowImage = () => {
  const { postImage, uploadStatus } = useSelector((state) => state.tweet)
  const dispatch = useDispatch()
  const bg = useColorModeValue('#f5f5f5', '#eae7e7')
  return (
    <>
      <Loader status={uploadStatus} />
      <Error status={uploadStatus} />
      {postImage && (
        <Box position="relative" w="70%">
          <Text bg={bg} className="attachment">
            {postImage.original_filename.length <= 20
              ? postImage.original_filename
              : postImage.original_filename.substring(0, 17) + '...'}
          </Text>
          <FaTimes
            color="gray"
            className="delete_img"
            onClick={() => dispatch(deleteImage())}
          />
        </Box>
      )}
    </>
  )
}

export default ShowImage
