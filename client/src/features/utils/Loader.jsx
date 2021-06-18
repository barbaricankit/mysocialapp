import { Spinner } from "@chakra-ui/spinner";

const Loader = ({ status }) => {
  return (
    <>
      {status === "loading" && (
        <Spinner position='fixed' top='10rem' left='50%' />
      )}
    </>
  );
};
export default Loader;
