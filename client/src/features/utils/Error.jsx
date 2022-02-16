import { Text } from "@chakra-ui/layout";

const Error = ({ status, error }) => {
  return (
    <>{status === "error" && <Text className='red_color'>{error}</Text>}</>
  );
};
export default Error;
