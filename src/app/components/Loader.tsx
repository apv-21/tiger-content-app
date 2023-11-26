import { Flex, CircularProgress } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex
      position="absolute"
      top="50%"
      left="50%"
      alignItems="center"
      justifyContent="center"
      transform="translate(-50%, -50%)"
    >
      <CircularProgress color="#FF5900" isIndeterminate />
    </Flex>
  );
};

export default Loader;
