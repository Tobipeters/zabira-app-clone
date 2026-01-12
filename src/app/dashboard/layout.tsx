import { AppWapper } from "./components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppWapper>{children}</AppWapper>;
}
