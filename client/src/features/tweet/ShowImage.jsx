import { Box, Image } from "@chakra-ui/react";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteImage } from ".";
import { Error, Loader } from "../index";

const ShowImage = () => {
  const { postImage, uploadStatus } = useSelector((state) => state.tweet);
  const dispatch = useDispatch();

  return (
    <>
      <Loader status={uploadStatus} />
      <Error status={uploadStatus} />
      {postImage && (
        <Box position='relative'>
          <Image
            src={postImage.secure_url}
            alt={postImage.original_filename}
            w='320px'
            h='240px'
          />
          <FaTimesCircle
            color='black'
            className='delete_img'
            onClick={() => dispatch(deleteImage())}
          />
        </Box>
      )}
    </>
  );
};

export default ShowImage;
