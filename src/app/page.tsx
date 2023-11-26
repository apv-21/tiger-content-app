import PageLayout from "./PageLayout";
import { fetchContent } from "./api/fetch-content.service";

export const getData = async () => {
  const response = await fetchContent();
  return response;
};

export default async function Home() {
  const fetchedContent = await getData();
  return <PageLayout fetchedContent={fetchedContent} />;
}
