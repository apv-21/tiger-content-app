"use client";
import { useState } from "react";

import Search from "./components/Search";
import ContentSection from "./components/ContentSection";
import Loader from "./components/Loader";

interface FetchedContent {
  edges: [];
}

const PageLayout = ({ fetchedContent }: { fetchedContent: FetchedContent }) => {
  const [content, setContent] = useState(fetchedContent);
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState(false);

  const showLoadingState = () => setFetching(true);

  const updateContentOnSearch = (data: FetchedContent) => {
    setContent(data);
    setFetching(false);
    setError(false);
  };

  const showErrorScreen = () => {
    setError(true);
    setFetching(false);
  };

  return (
    <>
      <Search
        fetchStartCallback={showLoadingState}
        successCallback={updateContentOnSearch}
        errorCallback={showErrorScreen}
      />

      {isFetching ? (
        <Loader />
      ) : (
        <ContentSection content={content} isError={isError} />
      )}
    </>
  );
};

export default PageLayout;
