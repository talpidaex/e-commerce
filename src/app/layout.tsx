import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./storeProvider";
import "./reset.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "E-commerce website",
};

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
