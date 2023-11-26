import { Image } from "@chakra-ui/react";

import { Text, Flex } from "@chakra-ui/react";

interface PostProps {
  podcastName: string;
  hostFirstName: string;
  hostLastName: string;
  companyName: string;
}

const Post = ({
  podcastName,
  hostFirstName,
  hostLastName,
  companyName,
}: PostProps) => {
  return (
    <Flex flexDirection="column" width="80%" margin="0 auto">
      <Image
        src="https://willnorris.com/api/imageproxy/200x/https://willnorris.com/images/imageproxy/small-things.jpg"
        alt="Image"
        borderRadius="8px 8px 0 0"
        width="100%"
        height="100%"
      />
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        overflow="hidden"
        color="white"
        bg="black"
        flex={1}
        p={5}
        borderRadius="0 0 8px 8px"
      >
        <Flex flexDirection="column">
          <Text
            color="#797670"
            fontWeight={500}
            fontSize="12px"
            lineHeight="14.4px"
          >
            COMMUNICATING AS A LEADER
          </Text>
          <Text>{podcastName}</Text>
          <Text>
            {hostFirstName} {hostLastName}
          </Text>
          <Text>{companyName}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Post;
