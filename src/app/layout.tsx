import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessie Baker | TypeScript/JavaScript React Developer",
  description: "Jessie Baker is a TypeScript/JavaScript React Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={
        inter.className
        }>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
