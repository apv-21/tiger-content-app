import { Image } from "@chakra-ui/react";

import { Text, Flex } from "@chakra-ui/react";

interface PostProps {
  imageUrl: string;
  podcastName: string;
  hostFirstName: string;
  hostLastName: string;
  companyName: string;
}

const Post = ({
  imageUrl,
  podcastName,
  hostFirstName,
  hostLastName,
  companyName,
}: PostProps) => {
  const imageArray = imageUrl?.split("tigerhall.io");
  const resizedImage = `${imageArray[0]}tigerhall.io/resize/250x120${imageArray[1]}`;

  return (
    <Flex flexDirection="column" width="68%" margin="0 auto">
      <Image
        src={resizedImage}
        alt="Image"
        borderRadius="8px 8px 0 0"
        width="100%"
        height="100%"
        backgroundSize="cover"
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
