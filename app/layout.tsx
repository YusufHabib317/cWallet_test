import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import dynamic from "next/dynamic";
import "./globals.css";
import "@mantine/core/styles.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

// General Components
// const Navbar = dynamic(() => import("@/app/components/navbar"));

export const metadata: Metadata = {
  title: "Create CWallet Home Page",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
