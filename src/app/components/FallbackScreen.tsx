import { Flex, Text } from "@chakra-ui/react";

const FallbackScreen = ({ text }: { text?: string }) => {
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
        {text}
      </Text>
    </Flex>
  );
};

export default FallbackScreen;
