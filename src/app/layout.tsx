import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import ThemeRegistry from "../themes/ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zabira",
  description: "Easily Buy & Sell Cryptocurrencies, Giftcards & Pay Bills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}  antialiased`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
