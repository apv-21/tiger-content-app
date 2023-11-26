"use client";

import { Flex } from "@chakra-ui/react";
import Post from "./Post";

const ContentSection = ({ content }: { content: any }) => {
  return (
    <Flex
      gap="24px"
      flexDirection="column"
      position="absolute"
      mt="80px"
      width="100%"
    >
      {content?.edges?.map((card, index: number) => {
        console.log("test card", card);
        const {
          name = "",
          experts = [{ firstName: "", lastName: "", company: "" }],
          image = { uri: "" },
        } = card || {};
        return (
          <Post
            key={index}
            imageUrl={image.uri}
            podcastName={name}
            hostFirstName={experts[0].firstName}
            hostLastName={experts[0].lastName}
            companyName={experts[0].company}
          />
        );
      })}
    </Flex>
  );
};

export default ContentSection;
