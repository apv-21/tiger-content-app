"use client";
import { useState } from "react";

import Search from "./components/Search";
import ContentSection from "./components/ContentSection";

const PageLayout = ({ fetchedContent }: { fetchedContent: any }) => {
  const [content, setContent] = useState(fetchedContent);

  const updateContentOnSearch = (data: any) => setContent(data);

  return (
    <div>
      <Search successCallback={updateContentOnSearch} />
      <ContentSection content={content} />
    </div>
  );
};

export default PageLayout;
