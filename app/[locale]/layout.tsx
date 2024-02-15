import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";

import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(
  () => import("@/app/[locale]/components/navbar"),
  {
    ssr: false,
  }
);
const DynamicFooter = dynamic(
  () => import("@/app/[locale]/components/footer"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title:
    "Cwallet - Simple, Secure, Fast &amp; Flexible Crypto Wallet for All Your Needs.",
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
            <DynamicNavbar />
            {children}
            <DynamicFooter />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
