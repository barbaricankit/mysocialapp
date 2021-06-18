import { Flex } from "@chakra-ui/layout";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../utils/Error";
import Loader from "../utils/Loader";
import { TweetButton } from ".";

const TweetHeader = ({ tweet }) => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.tweet);

  return (
    <>
      <Loader status={status} />
      <Error status={status} />
      <Flex
        justifyContent='space-between'
        alignItems='center'
        p={2}
        pt={4}
        w='100%'>
        <BiArrowBack fontSize='x-large' onClick={() => navigate("/feed")} />

        <TweetButton />
      </Flex>
      <hr />
    </>
  );
};

export default TweetHeader;
