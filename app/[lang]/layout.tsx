import "../globals.css";
import "../theme.css";
import { siteConfig } from "@/config/site";
import Providers from "@/provider/providers";
// import "simplebar-react/dist/simplebar.min.css";
import TanstackProvider from "@/provider/providers.client";
import AuthProvider from "@/provider/auth.provider";
// import "flatpickr/dist/themes/light.css";
import DirectionProvider from "@/provider/direction.provider";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const awaitedParams = await params;
  const lang = awaitedParams.lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <AuthProvider>
        <TanstackProvider>
          <Providers>
            <DirectionProvider lang={lang}>{children}</DirectionProvider>
          </Providers>
        </TanstackProvider>
      </AuthProvider>
    </html>
  );
}
