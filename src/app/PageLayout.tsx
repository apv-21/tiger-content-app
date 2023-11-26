"use client";
import { useState } from "react";

import Search from "./components/Search";
import ContentSection from "./components/ContentSection";

const PageLayout = ({ fetchedContent }: { fetchedContent: any }) => {
  const [content, setContent] = useState(fetchedContent);

  return (
    <div>
      <Search />
      <ContentSection content={content} />
    </div>
  );
};

export default PageLayout;
