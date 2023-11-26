"use client";
import { useState } from "react";

import Search from "./components/Search";
import ContentSection from "./components/ContentSection";

const PageLayout = ({ fetchedContent }: { fetchedContent: any }) => {
  const [content, setContent] = useState(fetchedContent);
  const [isFetching, setFetching] = useState(false);

  const showLoadingState = () => setFetching(true);

  const updateContentOnSearch = (data: any) => {
    setFetching(false);
    setContent(data);
  };

  return (
    <div>
      <Search
        fetchStartCallback={showLoadingState}
        successCallback={updateContentOnSearch}
      />
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <ContentSection content={content} />
      )}
    </div>
  );
};

export default PageLayout;
