import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoderJess",
  description: "Jessica Andzouana's Coding Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="stylesheet" href="./assets/css/simple-line-icons.css" />
    <body className={inter.className}>{children}</body>
    </html>
  );
}
