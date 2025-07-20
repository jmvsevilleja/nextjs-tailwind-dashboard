import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";

import { dictionaries, getDictionary } from "@/app/dictionaries";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: keyof typeof dictionaries };
}) => {
  const awaitedParams = await params;
  const lang = awaitedParams.lang;
  const trans = await getDictionary(lang);
  return (
    <DashBoardLayoutProvider trans={trans}>{children}</DashBoardLayoutProvider>
  );
};

export default layout;
