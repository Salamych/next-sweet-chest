import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/shared";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Сладкий сундук",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/cupcake.png" />
      </head>
      <body className={montserrat.className}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
