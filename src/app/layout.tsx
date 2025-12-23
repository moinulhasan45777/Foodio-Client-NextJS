import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodio",
  description: "Food Ordering Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <Navbar></Navbar>
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
