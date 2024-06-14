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
      // <script src="https://kit.fontawesome.com/003916f960.js" crossOrigin="anonymous"></script>
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
