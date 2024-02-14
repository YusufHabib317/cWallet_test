import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Cwallet - Simple, Secure, Fast &amp; Flexible Crypto Wallet for All Your Needs.",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: "en" | "fr";
  };
}

const LocaleLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  const local = useLocale();
  const messages = useMessages();

  // const t = useTranslations("Routes");
  // console.log("t", t("wallets.title"));

  if (params.locale !== local) {
    return notFound();
  }

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider>
            <Navbar />
            {children}
            <Footer />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
