import DashboardPageView from "./page-view";
import { getDictionary } from "@/app/dictionaries";

const Dashboard = async ({
  params,
}: {
  params: Promise<{
    lang: any;
  }>;
}) => {
  const { lang } = await params;
  const trans = await getDictionary(lang);
  return <DashboardPageView trans={trans} />;
};

export default Dashboard;
