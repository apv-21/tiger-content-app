import PageLayout from "./PageLayout";
import { fetchContent } from "./api/fetch-content.service";
import FallbackScreen from "./components/FallbackScreen";

export const getData = async () => {
  const response = await fetchContent();
  return response;
};

export default async function Home() {
  const fetchedContent = await getData();
  if (fetchedContent?.message === "Success") {
    return <PageLayout fetchedContent={fetchedContent?.contentCards} />;
  }
  return <FallbackScreen text="Uh-Oh! Something went wrong" />;
}
