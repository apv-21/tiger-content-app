"use client";

import { Flex } from "@chakra-ui/react";
import Post from "./Post";
import FallbackScreen from "./FallbackScreen";

const ContentSection = ({
  content,
  isError,
}: {
  content: any;
  isError: boolean;
}) => {
  const query = sessionStorage.getItem("query");
  if (content?.edges?.length === 0 && query !== "") {
    const errorMessage = `Oops! No result found for "${query}"`;
    return <FallbackScreen text={errorMessage} />;
  }

  if (isError) {
    return <FallbackScreen text="Uh-Oh! Something went wrong" />;
  }

  return (
    <Flex
      gap="24px"
      flexDirection="column"
      position="absolute"
      mt="80px"
      width="100%"
      zIndex={99}
      pb="24px"
    >
      {content?.edges?.map((card: any, index: number) => {
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
