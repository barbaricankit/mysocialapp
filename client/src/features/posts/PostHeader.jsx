import { Flex, Heading } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
moment.locale();

const PostHeader = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Flex alignItems='center' p={2} pt={4} w='100%'>
        <BiArrowBack
          fontSize='x-large'
          onClick={() => navigate(state?.path ? `/${state.path}` : "/feed")}
        />
        <Heading ml={3} size='lg'>
          Tweet
        </Heading>
      </Flex>
      <hr />
    </>
  );
};

export default PostHeader;
