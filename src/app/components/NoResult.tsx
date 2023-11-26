import { Flex, Text } from "@chakra-ui/react";

const NoResult = () => {
  const query = sessionStorage.getItem("query");

  return (
    <Flex
      position="absolute"
      top="50%"
      left="50%"
      alignItems="center"
      justifyContent="center"
      transform="translate(-50%, -50%)"
    >
      <Text color="white" textAlign="center">
        Oops! No result found for "${query}"
      </Text>
    </Flex>
  );
};

export default NoResult;
