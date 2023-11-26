"use client";
import { useState } from "react";

import Search from "./components/Search";
import ContentSection from "./components/ContentSection";
import Loader from "./components/Loader";

const PageLayout = ({ fetchedContent }: { fetchedContent: any }) => {
  const [content, setContent] = useState(fetchedContent);
  const [isFetching, setFetching] = useState(false);

  const showLoadingState = () => setFetching(true);

  const updateContentOnSearch = (data: any) => {
    setContent(data);
    setFetching(false);
  };

  return (
    <div>
      <Search
        fetchStartCallback={showLoadingState}
        successCallback={updateContentOnSearch}
      />

      {isFetching ? <Loader /> : <ContentSection content={content} />}
    </div>
  );
};

export default PageLayout;
