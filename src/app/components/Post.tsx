import { Image } from "@chakra-ui/react";

import { Text, Flex } from "@chakra-ui/react";
import LazyImage from "./LazyImage";

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
  const resizedImage = `${imageArray[0]}tigerhall.io/resize/250x140${imageArray[1]}`;

  return (
    <Flex flexDirection="column" width="68%" margin="0 auto">
      <LazyImage
        src={resizedImage}
        alt={podcastName ?? "image"}
        borderRadius="8px 8px 0 0"
        width="100%"
        height="100%"
      ></LazyImage>
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        overflow="hidden"
        color="black"
        bg="white"
        flex={1}
        p={5}
        borderRadius="0 0 8px 8px"
      >
        <Flex flexDirection="column" p={8}>
          <Text
            color="#797670"
            fontWeight={500}
            fontSize="12px"
            lineHeight="14.4px"
          >
            COMMUNICATING AS A LEADER
          </Text>
          <Text
            color="#000000"
            fontWeight={700}
            fontSize="16px"
            lineHeight="19.2px"
          >
            {podcastName}
          </Text>
          <Text
            color="#4D4B46"
            fontWeight={500}
            fontSize="12px"
            lineHeight="14.4px"
            mt={8}
          >
            {hostFirstName} {hostLastName}
          </Text>
          <Text
            color="
          #797670"
            fontWeight={700}
            fontSize="12px"
            lineHeight="14.4px"
          >
            {companyName === "" ? "Subway APAC" : companyName}
          </Text>
          <Flex mt={8} justifyContent="end">
            <Image
              src={`/Share.png`}
              alt="share"
              width={16}
              height={16}
            ></Image>
            <Image
              src={`/Bookmark.png`}
              alt="bookmark"
              width={16}
              height={16}
              ml={10}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Post;
