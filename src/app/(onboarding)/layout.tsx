import type { Metadata } from "next";
import { OnboardingFrame } from "./components";


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
    <OnboardingFrame>
        {children}
    </OnboardingFrame>
  );
}
