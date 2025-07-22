import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";

import { getDictionary } from "@/app/dictionaries";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    lang: any;
  }>;
}) => {
  const { lang } = await params;
  const trans = await getDictionary(lang);
  return (
    <DashBoardLayoutProvider trans={trans}>{children}</DashBoardLayoutProvider>
  );
};

export default layout;
