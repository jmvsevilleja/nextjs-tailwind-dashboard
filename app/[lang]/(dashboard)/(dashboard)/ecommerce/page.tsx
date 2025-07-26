import { getDictionary } from "@/app/dictionaries";
import EcommercePageView from "./page-view";

const EcommercePage = async ({
  params,
}: {
  params: Promise<{
    lang: any;
  }>;
}) => {
  const { lang } = await params;
  const trans = await getDictionary(lang);
  return <EcommercePageView trans={trans} />;
};

export default EcommercePage;
