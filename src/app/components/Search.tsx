"use client";

import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";
import { Input } from "@chakra-ui/react";
import { fetchContent } from "../api/fetch-content.service";
import debounce from "../utils/debounce";

export const Search = ({
  fetchStartCallback,
  successCallback,
  errorCallback,
}: {
  successCallback: (data: any) => void;
  fetchStartCallback: () => void;
  errorCallback: () => void;
}) => {
  const inputRef = useRef(null);

  const handleOnChange = debounce(
    async (event: { target: { value: string } }) => {
      const query = event.target.value;
      sessionStorage.setItem("query", query);
      fetchStartCallback();
      const response = await fetchContent(query);
      if (response?.message === "Success") {
        successCallback(response?.contentCards);
      } else {
        errorCallback();
      }
    },
    300
  );

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      zIndex={100}
      width="100%"
      background="#000"
    >
      <Box height="16px" />
      <Flex
        width="70%"
        border="1px solid #797670"
        style={{
          backgroundImage: "linear-gradient(0deg, #383733, #383733)",
          backgroundSize: "cover",
          backgroundPosition: "0 0, 0 100%",
        }}
        borderRadius="4px"
        margin="0 auto"
        padding="12px 10px"
      >
        <Flex flexDirection="row" height="16px" width="100%">
          <Image
            src={`/SearchIcon.png`}
            alt="search-icon"
            width={16}
            height={16}
          ></Image>
          <Input
            ref={inputRef}
            placeholder="Search"
            onChange={handleOnChange}
            bg="transparent"
            color="white"
            border="none"
            _focus={{
              outline: "none",
              boxShadow: "none",
              borderColor: "transparent",
            }}
            ml="8px"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Search;
